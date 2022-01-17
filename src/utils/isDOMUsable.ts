export const isDOMUsable = () => !!(typeof window !== 'undefined' && window?.document && window.document.createElement);
