import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const modal1 = document.getElementById('card-review');
const modalButton1 = document.getElementById('openModalButton1');
const closeModalButton1 = document.getElementById('closeModal');


function openModal() {
    modal1.style.display = 'inline';
}

function closeModal() {
    modal1.style.display = 'none';
}

modalButton1.addEventListener('click', openModal);
closeModalButton1.addEventListener('click', closeModal);


window.addEventListener('click', (e) => {
    if(e.target == modal1) {
        closeModal();
    }
})


const modalButton2 = document.getElementById('openModalButton2');
const modal2 = new bootstrap.Modal(document.getElementById('testModal'));

function openModal2() {
    modal2.show();
}

modalButton2.addEventListener('click', openModal2);
