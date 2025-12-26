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
        let currentDirection = null;

        const threshold = 80; // Minimum drag distance to navigate
        const maxDrag = 250; // Maximum visual drag distance

        const handleStart = (x, y) => {
            startX = x;
            startY = y;
            currentX = x;
            currentY = y;
            isDraggingFlag = true;
            currentDirection = null;
            setIsDragging(true);
            setDragDirection(null);
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

                if (deltaX > threshold && routes.left) {
                    currentDirection = 'left';
                    setDragDirection('left');
                } else if (deltaX < -threshold && routes.right) {
                    currentDirection = 'right';
                    setDragDirection('right');
                } else {
                    currentDirection = null;
                    setDragDirection(null);
                }
            } else {
                // Vertical drag
                const clampedY = Math.max(-maxDrag, Math.min(maxDrag, deltaY));
                setDragOffset({ x: 0, y: clampedY });

                if (deltaY > threshold && routes.up) {
                    currentDirection = 'up';
                    setDragDirection('up');
                } else if (deltaY < -threshold && routes.down) {
                    currentDirection = 'down';
                    setDragDirection('down');
                } else {
                    currentDirection = null;
                    setDragDirection(null);
                }
            }
        };

        const handleEnd = () => {
            if (!isDraggingFlag) return;

            // Navigate based on current direction if threshold was met
            if (currentDirection) {
                const targetRoute = routes[currentDirection];
                if (targetRoute) {
                    console.log('Navigating to:', targetRoute, 'Direction:', currentDirection);
                    navigate(targetRoute);
                }
            }

            // Reset
            isDraggingFlag = false;
            currentDirection = null;
            setIsDragging(false);
            setDragOffset({ x: 0, y: 0 });
            setDragDirection(null);
        };

        // Mouse events (desktop)
        const handleMouseDown = (e) => {
            // Ignore if clicking on interactive elements
            if (e.target.closest('button, a, input, textarea, select')) return;
            e.preventDefault();
            handleStart(e.clientX, e.clientY);
        };

        const handleMouseMove = (e) => {
            if (!isDraggingFlag) return;
            e.preventDefault();
            handleMove(e.clientX, e.clientY);
        };

        const handleMouseUp = (e) => {
            if (!isDraggingFlag) return;
            e.preventDefault();
            handleEnd();
        };

        // Touch events (mobile)
        const handleTouchStart = (e) => {
            if (e.target.closest('button, a, input, textarea, select')) return;
            const touch = e.touches[0];
            handleStart(touch.clientX, touch.clientY);
        };

        const handleTouchMove = (e) => {
            if (!isDraggingFlag) return;
            // Prevent default to stop page scrolling during drag
            const deltaX = Math.abs(currentX - startX);
            const deltaY = Math.abs(currentY - startY);
            if (deltaX > 10 || deltaY > 10) {
                e.preventDefault();
            }
            const touch = e.touches[0];
            handleMove(touch.clientX, touch.clientY);
        };

        const handleTouchEnd = (e) => {
            if (!isDraggingFlag) return;
            e.preventDefault();
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
        document.addEventListener('touchstart', handleTouchStart, { passive: false });
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleTouchEnd, { passive: false });
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
