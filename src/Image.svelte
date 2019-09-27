<script>
    export let imageUrl = null;
    export let altTag = imageUrl;
</script>

<style>
    img {
        height: 50vh;
        border: none;
    }
</style>

<img src={imageUrl} alt={altTag}>