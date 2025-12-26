import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useSwipeNavigation = (routes) => {
    const navigate = useNavigate();

    useEffect(() => {
        let touchStartX = 0;
        let touchStartY = 0;
        let touchEndX = 0;
        let touchEndY = 0;

        const minSwipeDistance = 50;

        const handleTouchStart = (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        };

        const handleTouchEnd = (e) => {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            handleSwipe();
        };

        const handleSwipe = () => {
            const deltaX = touchEndX - touchStartX;
            const deltaY = touchEndY - touchStartY;

            // Determine if horizontal or vertical swipe
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                // Horizontal swipe
                if (Math.abs(deltaX) > minSwipeDistance) {
                    if (deltaX > 0 && routes.left) {
                        // Swipe right - go to left page
                        navigate(routes.left);
                    } else if (deltaX < 0 && routes.right) {
                        // Swipe left - go to right page
                        navigate(routes.right);
                    }
                }
            } else {
                // Vertical swipe
                if (Math.abs(deltaY) > minSwipeDistance) {
                    if (deltaY > 0 && routes.up) {
                        // Swipe down - go to up page
                        navigate(routes.up);
                    } else if (deltaY < 0 && routes.down) {
                        // Swipe up - go to down page
                        navigate(routes.down);
                    }
                }
            }
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

        document.addEventListener('touchstart', handleTouchStart);
        document.addEventListener('touchend', handleTouchEnd);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchend', handleTouchEnd);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [navigate, routes]);
};
