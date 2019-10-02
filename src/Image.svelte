<script>
    export let imageUrl = null;
    export let altTag = imageUrl;
    export let className = "";
    export let height = "75vh";
</script>

<style>
    img {
        border: none;
        display: block;
        height: height
    }
</style>

<img src={imageUrl} alt={altTag} class="image {className}-image">