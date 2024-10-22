const req = async (source: string, options) => {
    return await fetch(source, options);
};

export { req };
