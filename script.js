// abilities selector

const ability = document.querySelectorAll('.ability');

const ability_d = document.querySelectorAll('.ability-d');
const button_d = document.querySelector('.button-d');

ability_d[0].style.display = 'flex';
ability_d[1].style.display = 'flex';
ability_d[2].style.display = 'flex';

function hide() {
    for (const abilities of ability) {
        abilities.style.display = 'none';
    };
};

function showAbility(button) {
    hide();
    const container = document.querySelectorAll('.ability-'+button);
    for (const element of container) {
        element.style.display = 'flex';
    };
};

// equipment-buttons

const equipment_buttons = document.querySelectorAll('.equipment-button');

const neptinos_button = document.querySelector('.button-neptinos');

neptinos_button.style.backgroundColor = neptinos_button.getAttribute('color');

function removeColor() {
    for (const buttons of equipment_buttons) {
        buttons.style.backgroundColor = '';
    };
};

function showEquipments(button) {
    removeColor();
    const container = document.querySelectorAll('.button-'+button);
    for (const element of container) {
        element.style.backgroundColor = element.getAttribute ('color');
    };
};

// equipment-show

const equipment_container = document.querySelectorAll('.equipment-container');

const equipment_weapon = document.querySelector('.equipment-weapon');

equipment_weapon.style.display = 'flex';

function hideEquipment() {
    for (const equipments of equipment_container) {
        equipments.style.display = 'none';
    };
};

function showEquipment(img) {
    hideEquipment();
    const container = document.querySelectorAll('.equipment-'+img);
    for (const element of container) {
        element.style.display = 'flex';
    };
};
