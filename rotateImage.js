/*Example

For

a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
the output should be

rotateImage(a) =
    [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]
*/
	 
function rotateImage(a) {
    let n=a.length;
	let res=[];
      for(let k=0;k<n;k++){
			let jamres=[];
            for(let j=0;j<n;j++){				
              jamres.push(a[n-1-j][k]);
            }
			res.push(jamres);
        }  
    return res;
}
