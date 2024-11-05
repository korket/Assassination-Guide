// abilities selector

const ability = document.querySelectorAll('.ability');
const ability_d = document.querySelectorAll('.ability-d');
const button_d = document.querySelector('.button-d');
const abilitiesButtons = document.querySelectorAll('.ability-button')
ability_d[0].style.display = 'flex';
ability_d[1].style.display = 'flex';
ability_d[2].style.display = 'flex';
button_d.style.backgroundColor = '#a5e1e0';

function hide() {
    for (const abilities of ability) {
        abilities.style.display = 'none';
    };
};

function removeAbilitiesButtonColor() {
    for (const abilitiesButton of abilitiesButtons) {
        abilitiesButton.style.backgroundColor = '#7fffd4dd';
    };
};

function showAbility(button) {
    hide();
    removeAbilitiesButtonColor();
    const container = document.querySelectorAll('.ability-'+button);
    const abilitiesButton = document.querySelectorAll('.button-'+button);
    for (const element of container) {
        element.style.display = 'flex';
    };
    for (const button of abilitiesButton) {
        button.style.backgroundColor = '#a5e1e0';
    };
};

// equipment-buttons

const equipments_neptinos = document.querySelector('.equipments-neptinos');
const equipment_buttons = document.querySelectorAll('.equipment-button');
const neptinos_button = document.querySelector('.button-neptinos');

equipments_neptinos.style.display = 'flex';
neptinos_button.style.backgroundColor = neptinos_button.getAttribute('color');

function removeColor() {
    for (const buttons of equipment_buttons) {
        buttons.style.backgroundColor = '';
    };
};

const equipments = document.querySelectorAll('.equipments');

function removeGrade() {
    for (const equipment of equipments) {
        equipment.style.display = 'none';
    };
};

function showEquipments(button) {
    removeColor();
    removeGrade();
    const container = document.querySelectorAll('.button-'+button);
    const gradeContainer = document.querySelectorAll('.equipments-'+button);
    for (const element of container) {
        element.style.backgroundColor = element.getAttribute ('color');
    };
    for (const grade of gradeContainer) {
        grade.style.display = 'flex';
    };
    showEquipment('weapon');
};

// equipment-show

const equipment_container = document.querySelectorAll('.equipment-container');
const equipment_weapon = document.querySelector('.equipment-weapon');

equipment_weapon.style.display = 'grid';

function hideEquipment() {
    for (const equipments of equipment_container) {
        equipments.style.display = 'none';
    };
};

function showEquipment(img) {
    hideEquipment();
    const container = document.querySelectorAll('.equipment-'+img);
    for (const element of container) {
        element.style.display = 'grid';
    };
};
