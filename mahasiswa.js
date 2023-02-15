const readline = require('readline-sync');
const mahasiswa = [];

const menu = ['Lihat data', 'Tambah', 'Hapus', 'edit'];

while (true) {
    const pilih = readline.keyInSelect(menu, 'Pilih Menu: ');

    switch (pilih + 1) {
        case 1:
            lihat();
            break;
        case 2:
            tambahData();
            break;
        case 3:
            hapusData();
            break;
        case 4:
            edit();
            break;
        case 0:
            if (mahasiswa.length === 0 ) {
                console.log('Sampai jumpa!');
                process.exit(0);
                break;
            }
            
            console.log('Tabel Mahasiswa yang terdata');
            console.table(mahasiswa);
            console.log('Sampai jumpa!');
            process.exit(0);
            break;
        default:
            break;
    }
}

function lihat() {
    if (mahasiswa.length === 0) return console.log('Data belum ada.');

    console.table(mahasiswa);
}

function tambahData(){
    const obj = {}
    const nama = readline.question('Masukan nama: ');
    obj.nama = nama;
    const kelas = readline.question('Masukan kelas: ');
    obj.kelas = kelas;

    mahasiswa.push(obj);
    console.log('data berhasil masuk!');
}
function hapusData(){
    if (mahasiswa.length === 0 ) return console.log('data belum ada');
    const temp = []
    for( const mhs of mahasiswa){
        temp.push(`${mhs.nama} - ${mhs.kelas}`);
    }
   const index = readline.keyInSelect(temp, 'Pilih data: ');
   mahasiswa.splice(index);
   console.log('data berhasil dihapus! ');
}

function edit(){
    const obj = {};
    if (mahasiswa.length === 0) return console.log('Data belum ada.');
    const temp = []
    for( const mhs of mahasiswa){
        temp.push(`${mhs.nama} - ${mhs.kelas}`);
    }
    const index = readline.keyInSelect(temp, 'Pilih data: ');
    console.log('anda pilih: ' + index);
    const nama = readline.question('Masukan nama: ');
    obj.nama = nama;
    const kelas = readline.question('Masukan Kelas: ');
    obj.kelas = kelas;
    mahasiswa[index] = obj; 

}