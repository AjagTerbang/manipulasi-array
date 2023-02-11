const readline = require('readline-sync');
const mahasiswa = [];

const menu = ['Lihat data', 'Tambah', 'Hapus'];

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
        case 0:
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