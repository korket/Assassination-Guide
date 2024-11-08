// Abilities Selectors
const abilities = document.querySelectorAll('.ability');
const abilityDetails = document.querySelectorAll('.ability-d');
const abilityButtons = document.querySelectorAll('.ability-button');
const buttonD = document.querySelector('.button-d');

abilityDetails.forEach(d => d.style.display = 'flex');
buttonD.style.backgroundColor = '#a5e1e0';

// Equipments Selectors
const equipments = document.querySelectorAll('.equipments');
const equipmentButtons = document.querySelectorAll('.equipment-button');
const equipmentContainers = document.querySelectorAll('.equipment-container');
const equipmentsNeptinos = document.querySelector('.equipments-neptinos');
const equipmentWeapon = document.querySelector('.equipment-weapon');
const twoEquipmentDescriptionContainers = document.querySelectorAll('.two-equipment-description-container');
const equipmentExplanation = document.querySelectorAll('.equipment-explanation');
const neptinosButton = document.querySelector('.button-neptinos');

neptinosButton.style.backgroundColor = neptinosButton.getAttribute('color');
equipmentsNeptinos.style.display = 'flex';
equipmentWeapon.style.display = 'grid';

// Rotations Selectors
const rotationButtons = document.querySelectorAll('.rotation-button');
const rotations = document.querySelectorAll('.rotation');
const rotationOneButton = document.querySelector('.rotation-one-button');
const rotationOne = document.querySelector('.rotation-one');

rotationOne.style.display = 'block';
rotationOneButton.style.backgroundColor = '#a5e1e0';

// Utility functions
function hideElements(elements) {
    elements.forEach(el => el.style.display = 'none');
}

function setButtonColor(buttons, color = '') {
    buttons.forEach(button => button.style.backgroundColor = color);
}

// Ability functions
function showAbility(buttonClass) {
    hideElements(abilities);
    setButtonColor(abilityButtons, '#7fffd4dd');
    document.querySelectorAll(`.ability-${buttonClass}`).forEach(el => el.style.display = 'flex');
    document.querySelectorAll(`.button-${buttonClass}`).forEach(btn => btn.style.backgroundColor = '#a5e1e0');
}

// Equipment functions
function showEquipments(buttonClass) {
    setButtonColor(equipmentButtons);
    hideElements(equipments);
    document.querySelectorAll(`.button-${buttonClass}`).forEach(btn => btn.style.backgroundColor = btn.getAttribute('color'));
    document.querySelectorAll(`.equipments-${buttonClass}`).forEach(el => el.style.display = 'flex');
    showEquipment('weapon');
}

// Equipment display functions
function showEquipment(type) {
    hideElements(equipmentContainers);
    hideElements(twoEquipmentDescriptionContainers);
    hideElements(equipmentExplanation);
    document.querySelectorAll(`.equipment-${type}`).forEach(el => {
        el.style.display = 'grid';
        el.querySelectorAll('.two-equipment-description-container').forEach(desc => desc.style.display = 'grid');
        el.querySelectorAll('.equipment-explanation').forEach(exp => exp.style.display = 'block');
    });
}

// Rotation functions
function showRotation(num) {
    hideElements(rotations);
    setButtonColor(rotationButtons, '#7fffd4dd');
    document.querySelectorAll(`.rotation-${num}-button`).forEach(btn => btn.style.backgroundColor = '#a5e1e0');
    document.querySelector(`.rotation-${num}`).style.display = 'block';
    document.querySelector('.rotations-content-container video').src = "./rotations/"+num+".mp4";
    if (num == 'four') {
        document.querySelector('.rotations-content-container video').setAttribute("controls", true);
    }
    else {
        document.querySelector('.rotations-content-container video').removeAttribute("controls");
        document.querySelector('.rotations-content-container video').setAttribute("muted", true);
    };
}
