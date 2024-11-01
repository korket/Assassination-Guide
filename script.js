// abilities selector

const ability = document.querySelectorAll('.ability');

const ability_d = document.querySelectorAll('.ability-d');
const button_d = document.querySelector('.button-d');

ability_d[0].style.display = 'flex'; 
ability_d[1].style.display = 'flex';

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