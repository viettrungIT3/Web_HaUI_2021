const myF = () => {

  // 2,5,4,0,1,5,6,7

  let arr = document.getElementById("arr").value;

  console.log(arr);

  let a = arr.split(",");

  console.log(a);

  //Chuyen chan ve dau, le xuong cuoi
  let t1 = 0, t2 = a.length -1; 
  while (t1<t2)
  {
      while (t1<t2 && a[t1]%2==0) t1++;
      while (t1<t2 && a[t2]%2==1) t2--;
      let temp = a[t1];
      a[t1] = a[t2];
      a[t2] = temp;
  }

  // Chuyen 0 ra giua
  let i, j=t1-1;
  for (i=0; i<j; i++)
  {
      while (a[j]==0) j--;
      if (a[i]==0)
      {
          let temp = a[i];
          a[i] = a[j];
          a[j] = temp;
      }
  }

  console.log(a);

  document.getElementById('arrShort').value = a;
};
