<script>
reversed = (data) => typeof(data) == "string" ? data.split("").reverse().join("") : data.reverse();
console.log(reversed("hello"));
console.log(reversed([1,2,3,4]));
</script>