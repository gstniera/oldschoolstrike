function showToast(title, type = 'normal', duration = 3000) {
    const toastComponent = document.getElementById('toast-component');
    const toastTitle = document.getElementById('toast-title');
    
    if (!toastComponent || !toastTitle) {
        console.warn("Toast element not found in DOM");
        return;
    }

    // Reset classes
    toastComponent.classList.remove(
        'bg-red-50', 'border-red-500', 'text-red-600',
        'bg-[#D5DEEF]', 'border-[#628ECB]', 'text-[#628ECB]',
        'bg-white', 'border-gray-300', 'text-gray-800'
    );

    // Set type color
    if (type === 'success') {
        toastComponent.classList.add('bg-[##D5DEEF]', 'border-[#628ECB]', 'text-[#628ECB]');
        toastComponent.style.border = '1px solid #8aaee0';
    } else if (type === 'error') {
        toastComponent.classList.add('bg-red-50', 'border-red-500', 'text-red-600');
        toastComponent.style.border = '1px solid #ef4444';
    } else {
        toastComponent.classList.add('bg-white', 'border-gray-300', 'text-gray-800');
        toastComponent.style.border = '1px solid #d1d5db';
    }

    // Set text
    toastTitle.textContent = title;

    // Animate in
    toastComponent.classList.remove('opacity-0', 'translate-y-64');
    toastComponent.classList.add('opacity-100', 'translate-y-0');

    // Auto-hide after duration
    setTimeout(() => {
        toastComponent.classList.remove('opacity-100', 'translate-y-0');
        toastComponent.classList.add('opacity-0', 'translate-y-64');
    }, duration);
}
