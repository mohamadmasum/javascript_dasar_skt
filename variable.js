// var,const, let 

let nama = "Masum";
    nama = "Mohamad Masum";
    
let umur = 27; // type data is Number

function printDataNama(nama = "john", umur = 19) {
    var data_saya =`nama saya adalah ${nama} dan umur saya adalah ${umur}`;
    console.log (data_saya);
} 

// printDataNama();

// object -> property -> nested variable

// let datasaya = {
//     nama :' Mohamad Masum',
//     umur : 27,
//     printDataNama: (nama = "nama lengkap", umur = "wajib diatas 17 tahun") => {
//         var data = `Nama saya adalah ${nama} dan umur saya adalah ${umur}`;
//         console.log(data)
//     }
// }

    const datasaya = {
        nama :' Mohamad Masum',
        umur : 27,
        printDataNama: (nama = "nama lengkap", umur = "wajib diatas 17 tahun") => {
            var data = `Nama saya adalah ${nama} dan umur saya adalah ${umur}`;
            console.log(data)
        }
    }
    // datasaya.nama = "alex sebastian";
   
    // console.log (datasaya)
    // datasaya.printDataNama();


console. log(this);


    // function printData2(){
    //     //     nama = 'Moahamad masum';
    //     //     umur = 27;

    //     // console.log(this);
    // }

    // printData2();
    
    // // const printdata3 = () =>{
    // //     console.log(this);
    // // }

    // printData2();

    // class printDataClass {
    //     constructor() {
    //         nama = "Mohamad masum";
    //         umur = 30
    //     }
    //     printDataNama = () => {
    //         console.log(this.nama)
    //     }
    // }

    // new printDataClass().printDataNama();





