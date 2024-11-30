export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=H85s8nAGcQ0fxrAypCO94Rp9Ly6YBfeT&q=${category}&limit=20`
    const resp = await fetch(url);
    const { data = [] } = await resp.json();
    console.log(data);
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    console.log("gifs");
    console.log(gifs);
    return gifs;
}