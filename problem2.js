
<script>

lastButOne = (list) => list.length < 2 ? " not present" : list[list.length-2] ;

console.log(lastButOne([1]));
console.log(lastButOne([1,2,3]));
</script>