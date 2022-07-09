export const setDocumentMeta = (title?: string, description?: string) => {
    const doc = window.document;
    if (title) doc.title = title;
    if (description) {
        window.document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    }
};
