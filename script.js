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

const button_neptinos = document.querySelector('.button-neptinos');
const button_gnosis = document.querySelector('.button-gnosis');
const button_alteia = document.querySelector('.button-alteia');
const button_arcana = document.querySelector('.button-arcana');

function addColor() {
    for (const buttons of equipment_buttons) {
        buttons.style.backgroundColor = '';
    };
};

function showEquipment(button) {
    addColor();
    const container = document.querySelectorAll('.button-'+button);
    for (const element of container) {
        element.style.backgroundColor = element.getAttribute ('color');
    };
};
