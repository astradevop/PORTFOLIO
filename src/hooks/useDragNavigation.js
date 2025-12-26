import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useDragNavigation = (routes) => {
    const navigate = useNavigate();
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragDirection, setDragDirection] = useState(null);

    useEffect(() => {
        let startX = 0;
        let startY = 0;
        let currentX = 0;
        let currentY = 0;
        let isDraggingFlag = false;

        const threshold = 100; // Minimum drag distance to navigate
        const maxDrag = 300; // Maximum visual drag distance

        const handleStart = (x, y) => {
            startX = x;
            startY = y;
            currentX = x;
            currentY = y;
            isDraggingFlag = true;
            setIsDragging(true);
        };

        const handleMove = (x, y) => {
            if (!isDraggingFlag) return;

            currentX = x;
            currentY = y;

            const deltaX = currentX - startX;
            const deltaY = currentY - startY;

            // Determine primary direction
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                // Horizontal drag
                const clampedX = Math.max(-maxDrag, Math.min(maxDrag, deltaX));
                setDragOffset({ x: clampedX, y: 0 });

                if (deltaX > 20 && routes.left) {
                    setDragDirection('left');
                } else if (deltaX < -20 && routes.right) {
                    setDragDirection('right');
                }
            } else {
                // Vertical drag
                const clampedY = Math.max(-maxDrag, Math.min(maxDrag, deltaY));
                setDragOffset({ x: 0, y: clampedY });

                if (deltaY > 20 && routes.up) {
                    setDragDirection('up');
                } else if (deltaY < -20 && routes.down) {
                    setDragDirection('down');
                }
            }
        };

        const handleEnd = () => {
            if (!isDraggingFlag) return;

            const deltaX = currentX - startX;
            const deltaY = currentY - startY;

            // Navigate if threshold is met
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX > threshold && routes.left) {
                    navigate(routes.left);
                } else if (deltaX < -threshold && routes.right) {
                    navigate(routes.right);
                }
            } else {
                if (deltaY > threshold && routes.up) {
                    navigate(routes.up);
                } else if (deltaY < -threshold && routes.down) {
                    navigate(routes.down);
                }
            }

            // Reset
            isDraggingFlag = false;
            setIsDragging(false);
            setDragOffset({ x: 0, y: 0 });
            setDragDirection(null);
        };

        // Mouse events
        const handleMouseDown = (e) => {
            // Ignore if clicking on interactive elements
            if (e.target.closest('button, a, input, textarea, select')) return;
            handleStart(e.clientX, e.clientY);
        };

        const handleMouseMove = (e) => {
            handleMove(e.clientX, e.clientY);
        };

        const handleMouseUp = () => {
            handleEnd();
        };

        // Touch events
        const handleTouchStart = (e) => {
            if (e.target.closest('button, a, input, textarea, select')) return;
            const touch = e.touches[0];
            handleStart(touch.clientX, touch.clientY);
        };

        const handleTouchMove = (e) => {
            const touch = e.touches[0];
            handleMove(touch.clientX, touch.clientY);
        };

        const handleTouchEnd = () => {
            handleEnd();
        };

        // Keyboard navigation
        const handleKeyDown = (e) => {
            switch (e.key) {
                case 'ArrowUp':
                    if (routes.up) {
                        e.preventDefault();
                        navigate(routes.up);
                    }
                    break;
                case 'ArrowDown':
                    if (routes.down) {
                        e.preventDefault();
                        navigate(routes.down);
                    }
                    break;
                case 'ArrowLeft':
                    if (routes.left) {
                        e.preventDefault();
                        navigate(routes.left);
                    }
                    break;
                case 'ArrowRight':
                    if (routes.right) {
                        e.preventDefault();
                        navigate(routes.right);
                    }
                    break;
                default:
                    break;
            }
        };

        // Add event listeners
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchstart', handleTouchStart, { passive: true });
        document.addEventListener('touchmove', handleTouchMove, { passive: true });
        document.addEventListener('touchend', handleTouchEnd);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [navigate, routes]);

    return { dragOffset, isDragging, dragDirection };
};
