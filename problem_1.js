// program to get last element in the List

/* approach-1 : Directly we can access the element using index. But in this case we will get undefined if array
length is 0 */
<script>
const list = [1,2,3,4];
console.log(list[list.length-1]);
</script>

//approach-2 : using normal function syntax  
<script>
const list = [1,2,3,4];
function return_last(arr)
{
  return arr.length==0 ? "array size is 0": arr[arr.length-1] ;
}
const element = return_last(list);
console.log(element);
</script>

// approach-3 ES6 format of function 
<script>
const getLast = (list) => list.length==0 ? "list is empty" : list[list.length-1] ;
const lastelement = getLast([1,2,3]);
console.log(`Last element is : ${lastelement}`);
</script>