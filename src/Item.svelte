<!-- 
••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
    Component Logic (JavaScript)
ºººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººº
 -->
<script>
    import Image from "./Image.svelte";
    export let item = {
        imageUrl: "url",
        brand: "brand",
        website: "url",
        name: "name",
        abv: 0,
        description: "description",
        size: 0,
        price: 0
    }
    $: proof = item.abv * 2;

</script>

<!--
    Styles (CSS)
ºººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººº
 -->
<style>
    .main-grid {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1.615fr;
        background-color: rgba(0, 238, 0, 0.5);
        grid-template-rows: repeat(3, 1fr) 4fr repeat(3, 1fr);

        color: darkslateblue;
        font-family: Lato, sans-serif;
        font-size: 1.5em;
        line-height: 2em;
    }
    div.text-grid {
        display: grid;
        max-height: 200px;
        grid-template-rows: auto;
        background-color: rgba(255,0,0,0.5)
    }
    p {
        max-width: 50vw;
    }
    h2 {
        font-family: Futura, sans-serif;
    }
    .italic {
        font-style: italic;
    }
    :global(img.image) {
        grid-row-start: 1;
        grid-row-end: 6;
    }
    /*∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞*/
</style>


<!-- 
••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
    Component Markup (HTML template)
ºººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººº
 -->
<div class="main-grid">
    <Image className="product" style="display:none;" height="74vh" imageUrl={item.imageUrl} />
        <p class="brand"><a href={item.website}>{item.brand}</a></p>
        <p class="name">{item.name}</p>
        <p class="abv">{item.abv}%ABV {proof} proof</p>
        <p class="description">{item.description}</p>
        <p class="size">{item.size}ml</p>
        <p class="price">${item.price}</p>
 
</div><!--.main-grid-->

    