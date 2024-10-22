export const render = (
    currentNode: HTMLElement,
    element: HTMLElement
): void => {
    [...currentNode.children].forEach(child => {
        child.remove();
    });

    currentNode.append(element);
};
