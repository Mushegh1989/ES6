/*
	Example

For

grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
        ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
        ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
        ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
        ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '7', '.']]
the output should be
sudoku2(grid) = true;
*/
function sudoku2(grid) {
				for (let k=0;k<9;k++){
                    // check row
					for (let i=0;i<8;i++){
						let z=i+1;
						for(z;z<9;z++){
							if(grid[k][i]!='.' && grid[k][i]==grid[k][z]){
								return false;
								}
							}
                    // check column
						let m=k+1;
						for (m;m<9;m++){
							if(grid[k][i]!='.' && grid[k][i]==grid[m][i]){
								return false;
							}
						}												
					}
				}
                // check 3X3 matrix
				function sudch (mmm,nnn){					
					let charr=[];
					for(let ddd=mmm;ddd<(mmm+3);ddd++){
						for(kkk=nnn;kkk<(nnn+3);kkk++){
						if(grid[ddd][kkk]!='.'){
								if (charr[(grid[ddd][kkk])]==0){
									return false;
								}
								else
								{
									charr[(grid[ddd][kkk])]=0;
								}
							}
						}
					}		
				}
				for(let yy=0;yy<7;yy+=3){
					for(let ee=0;ee<7;ee+=3){
						if(sudch(yy,ee)==false){return false;}
					}
				}
				return true;
			}