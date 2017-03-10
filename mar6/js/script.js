var modal = document.getElementById('modal')

createModal('prompt', 'Do you like movies?');

function createModal(modalType, modalMsg){
  modal.classlist.add('active');
    var modalForm = document.createElement('form'),
    var modalMessage = document.createElement('p'),
    var modalInput = document.createElement('input'),
    var modalDiv = document.createElement('div'),
    var modalConfirm = document.createElement('input'),
    var modalCancel = document.createElement('input');

    modalMessage.textContent = modalMsg;

    modal.appendChild(modalForm);

    modalInput.type = 'text';
    modalInput.placeholder = 'Your Response';
    modalConfirm.type = 'submit';
    modalConfirm.value = 'Confirm';
    modalCancel.type = 'button';
    modalCancel.value = 'Cancel';

    modalForm.appendChild(modalMessage);
    if(modalType === 'prompt'){
        modalForm.appendChild(modalInput);
        modalDiv.appendChild(modalCancel);
    }else if(modalType === 'confirm'){
        modalDiv.appendChild(modalCancel);
    }
    modalForm.appendChild(modalConfirm);
    modalForm.append(modalDiv);

    modal.append(modalForm);
    modalCancel.addEventListener('click', function(evt){
      evt.preventDefault();
      var userInput = modalInput.value;
      console.log('user clicked cancel');
    });
}
createModal('alert', 'do you like gay men');
