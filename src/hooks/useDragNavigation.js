import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useDragNavigation = (routes) => {
    const navigate = useNavigate();
    const [dragState, setDragState] = useState({
        isDragging: false,
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        direction: null,
        targetPath: null,
        distance: 0
    });

    const isDraggingRef = useRef(false);

    // Configurable thresholds
    const DRAG_THRESHOLD = 50; // Minimum pixels to consider a direction locked
    const NAV_THRESHOLD = 150; // Pixels needed to trigger navigation (or percentage of screen)

    const handleStart = (clientX, clientY) => {
        isDraggingRef.current = true;
        setDragState(prev => ({
            ...prev,
            isDragging: true,
            startX: clientX,
            startY: clientY,
            currentX: clientX,
            currentY: clientY,
            direction: null,
            targetPath: null,
            distance: 0
        }));
    };

    const handleMove = (clientX, clientY) => {
        if (!isDraggingRef.current) return;

        const deltaX = clientX - dragState.startX;
        const deltaY = clientY - dragState.startY;

        // Calculate distance
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        // Determine direction
        // We use 45 degree segments to determine Up/Down/Left/Right
        let direction = null;
        let targetPath = null;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Horizontal
            if (deltaX > 0) {
                direction = 'RIGHT';
                targetPath = routes.RIGHT;
            } else {
                direction = 'LEFT';
                targetPath = routes.LEFT;
            }
        } else {
            // Vertical
            if (deltaY > 0) {
                direction = 'DOWN';
                targetPath = routes.DOWN;
            } else {
                direction = 'UP';
                targetPath = routes.UP;
            }
        }

        setDragState(prev => ({
            ...prev,
            currentX: clientX,
            currentY: clientY,
            direction,
            targetPath,
            distance
        }));
    };

    const handleEnd = () => {
        if (!isDraggingRef.current) return;
        isDraggingRef.current = false;

        const { distance, targetPath } = dragState;

        if (distance > NAV_THRESHOLD && targetPath) {
            navigate(targetPath);
        }

        // Reset state
        setDragState(prev => ({
            ...prev,
            isDragging: false,
            direction: null,
            targetPath: null,
            distance: 0
        }));
    };

    // Touch events
    const onTouchStart = (e) => handleStart(e.touches[0].clientX, e.touches[0].clientY);
    const onTouchMove = (e) => handleMove(e.touches[0].clientX, e.touches[0].clientY);
    const onTouchEnd = handleEnd;

    // Mouse events (optional, mostly for testing on desktop)
    const onMouseDown = (e) => handleStart(e.clientX, e.clientY);
    const onMouseMove = (e) => handleMove(e.clientX, e.clientY);
    const onMouseUp = handleEnd;

    return {
        dragState,
        handlers: {
            onTouchStart,
            onTouchMove,
            onTouchEnd,
            onMouseDown,
            onMouseMove,
            onMouseUp,
            onMouseLeave: onMouseUp // Handle mouse leaving window
        }
    };
};
