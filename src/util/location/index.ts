export const param = () => {
    const params = new URLSearchParams(window.location.search);
    const paramsObj = {} as { [key: string]: string };

    Array.from(params.entries()).forEach(([key, value]) => {
        paramsObj[key] = value;
    });

    return paramsObj;
};
