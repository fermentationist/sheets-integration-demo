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
        background-color: #FFFFFF;
        grid-template-rows: repeat(9, auto);
        font-family: Raleway, sans-serif;
        font-size: 1.5em;
        line-height: 1.5;
        padding: 20px;
        max-width: 65vw;
        margin: 20px;
        color: #212529;
        border: 1px solid #661E25;
    }
    a.brand h2, p.abv {
        font-size: 17px;
        color: #B1B1B1;
    }
    a.brand {
        text-decoration: underline;
        color: #B1B1B1;
    }
    h1.name {
        font-size: 30px;
    }
    div.description {
        font-size: 18px;
    }
    p.size {
        font-size: 15px;
    }
    p.price {
        font-size: 22px;
    }
    hr{
        border: 1px dashed #b1b1b1;
        padding: 0;
        height: 1px;
    }
    :global(img.image) {
        grid-row-start: 1;
        grid-row-end: 9;
        justify-self: center;
    }
    /*∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞*/
</style>


<!-- 
••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
    Component Markup (HTML template)
ºººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººº
 -->
<section class="main-grid">
    <Image className="product" height="74vh" imageUrl={item.imageUrl} />
        <a class="brand" href={item.website}><h2>{item.brand}</h2></a>
        <h1 class="name">{item.name}</h1>
        <!-- <p class="name"><h1>{item.name}</h1></p> -->
        <p class="abv">{item.abv}%ABV {proof} proof</p>
        <hr/>
        <div class="description">{item.description}</div>
        <hr/>
        <p class="size">Size: {item.size}ml</p>
        <p class="price">Price: ${item.price}</p>
 
</section><!--.main-grid-->

    