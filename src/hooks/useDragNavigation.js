import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useDragNavigation = (routes) => {
    const navigate = useNavigate();
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragDirection, setDragDirection] = useState(null);
    const [nextPage, setNextPage] = useState(null);

    useEffect(() => {
        let startX = 0;
        let startY = 0;
        let currentX = 0;
        let currentY = 0;
        let isDraggingFlag = false;

        const threshold = 150; // Minimum drag distance to navigate
        const maxDrag = 400; // Maximum visual drag distance

        const handleStart = (x, y, e) => {
            // Ignore if clicking on interactive elements
            if (e.target.closest('button, a, input, textarea, select, [role="button"]')) return;

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

                // Inverted: drag RIGHT to go to right page (Projects), drag LEFT to go to left page (Tools)
                if (deltaX < -50 && routes.left) {
                    setDragDirection('left');
                    setNextPage(routes.left);
                } else if (deltaX > 50 && routes.right) {
                    setDragDirection('right');
                    setNextPage(routes.right);
                } else {
                    setDragDirection(null);
                    setNextPage(null);
                }
            } else {
                // Vertical drag  
                const clampedY = Math.max(-maxDrag, Math.min(maxDrag, deltaY));
                setDragOffset({ x: 0, y: clampedY });

                // Inverted: drag UP to go to up page (About), drag DOWN to go to down page (Experience)
                if (deltaY < -50 && routes.up) {
                    setDragDirection('up');
                    setNextPage(routes.up);
                } else if (deltaY > 50 && routes.down) {
                    setDragDirection('down');
                    setNextPage(routes.down);
                } else {
                    setDragDirection(null);
                    setNextPage(null);
                }
            }
        };

        const handleEnd = () => {
            if (!isDraggingFlag) return;

            const deltaX = currentX - startX;
            const deltaY = currentY - startY;

            // Navigate if threshold is met (inverted to match intuitive drag-toward-target)
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX < -threshold && routes.left) {
                    navigate(routes.left);
                } else if (deltaX > threshold && routes.right) {
                    navigate(routes.right);
                }
            } else {
                if (deltaY < -threshold && routes.up) {
                    navigate(routes.up);
                } else if (deltaY > threshold && routes.down) {
                    navigate(routes.down);
                }
            }

            // Reset
            isDraggingFlag = false;
            setIsDragging(false);
            setDragOffset({ x: 0, y: 0 });
            setDragDirection(null);
            setNextPage(null);
        };

        // Mouse events
        const handleMouseDown = (e) => {
            handleStart(e.clientX, e.clientY, e);
        };

        const handleMouseMove = (e) => {
            if (isDraggingFlag) {
                e.preventDefault();
                handleMove(e.clientX, e.clientY);
            }
        };

        const handleMouseUp = () => {
            handleEnd();
        };

        // Touch events
        const handleTouchStart = (e) => {
            const touch = e.touches[0];
            handleStart(touch.clientX, touch.clientY, e);
        };

        const handleTouchMove = (e) => {
            if (isDraggingFlag) {
                const touch = e.touches[0];
                handleMove(touch.clientX, touch.clientY);
            }
        };

        const handleTouchEnd = () => {
            handleEnd();
        };

        // Add event listeners
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchstart', handleTouchStart, { passive: true });
        document.addEventListener('touchmove', handleTouchMove, { passive: true });
        document.addEventListener('touchend', handleTouchEnd);

        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [navigate, routes]);

    return { dragOffset, isDragging, dragDirection, nextPage };
};
