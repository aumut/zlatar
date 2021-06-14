
const servicesInfo = document.querySelector('.content-servicesi');
let PRICE = 0;
let LENGTH = 0;
let ENTER = 0;
let THICKNESS = 0;
if (servicesInfo) {
    disableCalculateBlock();
    calculateBlockFieldsHandlers();
}

function calculateBlockFieldsHandlers() {
    const materialField = document.getElementById('material');
    const ulList = document.querySelector('.select-dropdown.materials');
    materialField.addEventListener('focus', e => {
        prepareMaterialsData();
        ulList.style.display = 'block';
    });
    materialField.addEventListener('blur', e => {
        setTimeout(() => {
            ulList.style.display = 'none';
        }, 500);
    });

    const thicknessField = document.getElementById('thickness');
    const ulThicknessList = document.querySelector('.select-dropdown.thickness');
    thicknessField.addEventListener('focus', e => {
        ulThicknessList.style.display = 'block';
    });
    thicknessField.addEventListener('blur', e => {
        setTimeout(() => {
            ulThicknessList.style.display = 'none';
        }, 500);
    });

    const lengthField = document.getElementById('length');
    lengthField.addEventListener('change', e => {
        LENGTH = lengthField.value;
        calculateCost();
    });

    const enterInput = document.getElementById('enter');
    enterInput.addEventListener('change', e => {
        calculateCost();
    });
}

function disableCalculateBlock() {
    const nameInput = document.querySelector('.block-info #name.field');
    const phoneInput = document.querySelector('.block-info #phone.field');
    const calculateBlock = document.querySelector('.block-calculate');
    const calculateInputs = calculateBlock.querySelectorAll('.field');

    [nameInput, phoneInput].forEach(input => {
        input.addEventListener('blur', e => {

            if (nameInput.value !== '' && phoneInput.value !== '') {
                calculateBlock.classList.remove('disable');
                calculateInputs.forEach(input => {
                    input.removeAttribute('disabled');
                });
            } else {
                calculateBlock.classList.add('disable');
                calculateInputs.forEach(input => {
                    input.setAttribute('disabled', true);
                });
            }
        })
    });
}

function prepareMaterialsData() {
    const data = [
        {
            "serviceId": 17,
            "materials": [
                {
                    "id": 1,
                    "name": "Чёрный металл",
                    "price": [
                        {
                            "thickness": 0.8,
                            "price": {
                                "until_100":  324,
                                "until_500":  216,
                                "until_3000":  194
                            },
                            "enter": 10
                        },
                        {
                            "thickness": 1,
                            "price": {
                                "until_100":  389,
                                "until_500":  259,
                                "until_3000":  233
                            },
                            "enter": 10
                        },
                        {
                            "thickness": 1.5,
                            "price": {
                                "until_100":  454,
                                "until_500":  302,
                                "until_3000":  272
                            },
                            "enter": 10
                        },
                        {
                            "thickness": 2,
                            "price": {
                                "until_100":  518,
                                "until_500":  346,
                                "until_3000":  311
                            },
                            "enter": 10
                        },
                        {
                            "thickness": 2.5,
                            "price": {
                                "until_100":  680,
                                "until_500":  378,
                                "until_3000":  340
                            },
                            "enter": 10
                        },
                        {
                            "thickness": 3,
                            "price": {
                                "until_100":  778,
                                "until_500":  400,
                                "until_3000":  360
                            },
                            "enter": 20
                        },
                        {
                            "thickness": 4,
                            "price": {
                                "until_100":  907,
                                "until_500":  605,
                                "until_3000":  544
                            },
                            "enter": 20
                        },
                        {
                            "thickness": 5,
                            "price": {
                                "until_100":  1102,
                                "until_500":  734,
                                "until_3000":  540
                            },
                            "enter": 25
                        },
                        {
                            "thickness": 6,
                            "price": {
                                "until_100":  1328,
                                "until_500":  886,
                                "until_3000":  648
                            },
                            "enter": 25
                        },
                        {
                            "thickness": 8,
                            "price": {
                                "until_100":  2430,
                                "until_500":  1620,
                                "until_3000":  1080
                            },
                            "enter": 25
                        },
                        {
                            "thickness": 10,
                            "price": {
                                "until_100":  2546,
                                "until_500":  1697,
                                "until_3000":  1311
                            },
                            "enter": 25
                        },
                        {
                            "thickness": 12,
                            "price": {
                                "until_100":  3600,
                                "until_500":  2764,
                                "until_3000":  2404
                            },
                            "enter": 25
                        },
                        {
                            "thickness": 14,
                            "price": {
                                "until_100":  4693,
                                "until_500":  3921,
                                "until_3000":  3446
                            },
                            "enter": 25
                        },
                        {
                            "thickness": 16,
                            "price": {
                                "until_100":  6804,
                                "until_500":  5686,
                                "until_3000":  4997
                            },
                            "enter": 25
                        }
                    ]

                },
                {
                    "id": 2,
                    "name": "Нержавеющая сталь",
                    "price": [
                        {
                            "thickness": 0.8,
                            "price": {
                                "until_100":  324,
                                "until_500":  270,
                                "until_3000":  194
                            },
                            "enter": 15
                        },
                        {
                            "thickness": 1,
                            "price": {
                                "until_100":  378,
                                "until_500":  324,
                                "until_3000":  238
                            },
                            "enter": 15
                        },
                        {
                            "thickness": 1.5,
                            "price": {
                                "until_100":  410,
                                "until_500":  346,
                                "until_3000":  270
                            },
                            "enter": 15
                        },
                        {
                            "thickness": 2,
                            "price": {
                                "until_100":  650,
                                "until_500":  410,
                                "until_3000":  324
                            },
                            "enter": 15
                        },
                        {
                            "thickness": 3,
                            "price": {
                                "until_100":  918,
                                "until_500":  886,
                                "until_3000":  540
                            },
                            "enter": 20
                        },
                        {
                            "thickness": 4,
                            "price": {
                                "until_100":  1116,
                                "until_500":  1062,
                                "until_3000":  774
                            },
                            "enter": 20
                        },
                        {
                            "thickness": 5,
                            "price": {
                                "until_100":  1332,
                                "until_500":  1278,
                                "until_3000":  945
                            },
                            "enter": 20
                        },
                        {
                            "thickness": 6,
                            "price": {
                                "until_100":  2430,
                                "until_500":  2340,
                                "until_3000":  1836
                            },
                            "enter": 20
                        },
                        {
                            "thickness": 8,
                            "price": {
                                "until_100":  3475,
                                "until_500":  3346,
                                "until_3000":  2625
                            },
                            "enter": 20
                        }
                    ]

                },
                {
                    "id": 3,
                    "name": "Алюминий",
                    "price": [
                        {
                            "thickness": 1,
                            "price": {
                                "until_100":  670,
                                "until_500":  421,
                                "until_3000":  346
                            },
                            "enter": 10
                        },
                        {
                            "thickness": 1.5,
                            "price": {
                                "until_100":  961,
                                "until_500":  637,
                                "until_3000":  486
                            },
                            "enter": 10
                        },
                        {
                            "thickness": 2,
                            "price": {
                                "until_100":  1350,
                                "until_500":  832,
                                "until_3000":  670
                            },
                            "enter": 10
                        },
                        {
                            "thickness": 3,
                            "price": {
                                "until_100":  1728,
                                "until_500":  1188,
                                "until_3000":  853
                            },
                            "enter": 20
                        },
                        {
                            "thickness": 4,
                            "price": {
                                "until_100":  2475,
                                "until_500":  1701,
                                "until_3000":  1224
                            },
                            "enter": 20
                        },
                        {
                            "thickness": 5,
                            "price": {
                                "until_100":  3096,
                                "until_500":  2214,
                                "until_3000":  1638
                            },
                            "enter": 20
                        },
                        {
                            "thickness": 6,
                            "price": {
                                "until_100":  4489,
                                "until_500":  3210,
                                "until_3000":  2375
                            },
                            "enter": 20
                        }
                    ]

                }
            ]
        },
        {
            "serviceId": 18,
            "materials": [
                {
                    "id": 1,
                    "name": "Керамическая плитка",
                    "price": [
                        {
                            "thickness": 5,
                            "price": 500,
                            "enter": 10
                        },
                        {
                            "thickness": 6,
                            "price": 600,
                            "enter": 10
                        },
                        {
                            "thickness": 8,
                            "price": 800,
                            "enter": 10
                        },
                        {
                            "thickness": 10,
                            "price": 1000,
                            "enter": 10
                        }
                    ]

                },
                {
                    "id": 2,
                    "name": "Керамогранит",
                    "price": [
                        {
                            "thickness": 8,
                            "price": 1300,
                            "enter": 10
                        },
                        {
                            "thickness": 10,
                            "price": 1500,
                            "enter": 10
                        },
                        {
                            "thickness": 12,
                            "price": 1700,
                            "enter": 10
                        }
                    ]

                },
                {
                    "id": 3,
                    "name": "Мрамор",
                    "price": [
                        {
                            "thickness": 10,
                            "price": 1800,
                            "enter": 10
                        },
                        {
                            "thickness": 12,
                            "price": 1800,
                            "enter": 10
                        },
                        {
                            "thickness": 14,
                            "price": 2000,
                            "enter": 10
                        },
                        {
                            "thickness": 15,
                            "price": 2100,
                            "enter": 10
                        },
                        {
                            "thickness": 16,
                            "price": 2100,
                            "enter": 10
                        },
                        {
                            "thickness": 20,
                            "price": 2200,
                            "enter": 15
                        },
                        {
                            "thickness": 25,
                            "price": 2500,
                            "enter": 15
                        },
                        {
                            "thickness": 30,
                            "price": 3500,
                            "enter": 15
                        }
                    ]

                },
                {
                    "id": 4,
                    "name": "Гранит",
                    "price": [
                        {
                            "thickness": 10,
                            "price": 2000,
                            "enter": 15
                        },
                        {
                            "thickness": 12,
                            "price": 2400,
                            "enter": 15
                        },
                        {
                            "thickness": 14,
                            "price": 2800,
                            "enter": 15
                        },
                        {
                            "thickness": 15,
                            "price": 3000,
                            "enter": 15
                        },
                        {
                            "thickness": 16,
                            "price": 3000,
                            "enter": 15
                        },
                        {
                            "thickness": 20,
                            "price": 3200,
                            "enter": 15
                        },
                        {
                            "thickness": 25,
                            "price": 4000,
                            "enter": 20
                        },
                        {
                            "thickness": 30,
                            "price": 5000,
                            "enter": 25
                        }
                    ]

                },
                {
                    "id": 5,
                    "name": "Разное (пласти, текстолит , резина)",
                    "price": [
                        {
                            "thickness": 1,
                            "price": 650,
                            "enter": 15
                        },
                        {
                            "thickness": 2,
                            "price": 850,
                            "enter": 15
                        },
                        {
                            "thickness": 3,
                            "price": 1050,
                            "enter": 20
                        },
                        {
                            "thickness": 4,
                            "price": 1150,
                            "enter": 30
                        },
                        {
                            "thickness": 5,
                            "price": 1250,
                            "enter": 35
                        },
                        {
                            "thickness": 6,
                            "price": 1350,
                            "enter": 40
                        },
                        {
                            "thickness": 8,
                            "price": 1450,
                            "enter": 50
                        },
                        {
                            "thickness": 10,
                            "price": 1600,
                            "enter": 80
                        },
                        {
                            "thickness": 12,
                            "price": 1767,
                            "enter": 100
                        },
                        {
                            "thickness": 14,
                            "price": 1900,
                            "enter": 200
                        },
                        {
                            "thickness": 15,
                            "price": 2050,
                            "enter": 250
                        },
                        {
                            "thickness": 16,
                            "price": 2200,
                            "enter": 500
                        },
                        {
                            "thickness": 20,
                            "price": 2350,
                            "enter": 1000
                        },
                        {
                            "thickness": 25,
                            "price": 2500,
                            "enter": 2000
                        },
                        {
                            "thickness": 30,
                            "price": 2750,
                            "enter": 3000
                        },
                        {
                            "thickness": 35,
                            "price": 2900,
                            "enter": 4000
                        },
                        {
                            "thickness": 40,
                            "price": 3050,
                            "enter": 6000
                        },
                        {
                            "thickness": 50,
                            "price": 3500,
                            "enter": 9000
                        },
                        {
                            "thickness": 60,
                            "price": 4000,
                            "enter": 15000
                        }
                    ]

                },
                {
                    "id": 6,
                    "name": "Чёрный металл",
                    "price": [
                        {
                            "thickness": 1,
                            "price": 650,
                            "enter": 15
                        },
                        {
                            "thickness": 2,
                            "price": 850,
                            "enter": 15
                        },
                        {
                            "thickness": 3,
                            "price": 1150,
                            "enter": 20
                        },
                        {
                            "thickness": 4,
                            "price": 1350,
                            "enter": 30
                        },
                        {
                            "thickness": 5,
                            "price": 1700,
                            "enter": 35
                        },
                        {
                            "thickness": 6,
                            "price": 2100,
                            "enter": 40
                        },
                        {
                            "thickness": 8,
                            "price": 2900,
                            "enter": 50
                        },
                        {
                            "thickness": 10,
                            "price": 3900,
                            "enter": 80
                        },
                        {
                            "thickness": 12,
                            "price": 4900,
                            "enter": 100
                        },
                        {
                            "thickness": 14,
                            "price": 6000,
                            "enter": 125
                        },
                        {
                            "thickness": 15,
                            "price": 6500,
                            "enter": 150
                        },
                        {
                            "thickness": 16,
                            "price": 7500,
                            "enter": 175
                        },
                        {
                            "thickness": 20,
                            "price": 9000,
                            "enter": 200
                        },
                        {
                            "thickness": 25,
                            "price": 15000,
                            "enter": 225
                        },
                        {
                            "thickness": 30,
                            "price": 27000,
                            "enter": 250
                        },
                        {
                            "thickness": 35,
                            "price": 40000,
                            "enter": 275
                        },
                        {
                            "thickness": 40,
                            "price": 75000,
                            "enter": 300
                        },
                        {
                            "thickness": 50,
                            "price": 150000,
                            "enter": 350
                        },
                        {
                            "thickness": 60,
                            "price": 250000,
                            "enter": 400
                        }
                    ]

                },
                {
                    "id": 7,
                    "name": "Нержавеющая сталь",
                    "price": [
                        {
                            "thickness": 1,
                            "price": 750,
                            "enter": 20
                        },
                        {
                            "thickness": 2,
                            "price": 950,
                            "enter": 30
                        },
                        {
                            "thickness": 3,
                            "price": 1350,
                            "enter": 50
                        },
                        {
                            "thickness": 4,
                            "price": 1650,
                            "enter": 60
                        },
                        {
                            "thickness": 5,
                            "price": 2000,
                            "enter": 70
                        },
                        {
                            "thickness": 6,
                            "price": 2400,
                            "enter": 80
                        },
                        {
                            "thickness": 8,
                            "price": 4000,
                            "enter": 90
                        },
                        {
                            "thickness": 10,
                            "price": 6000,
                            "enter": 100
                        },
                        {
                            "thickness": 12,
                            "price": 9000,
                            "enter": 110
                        },
                        {
                            "thickness": 14,
                            "price": 11000,
                            "enter": 125
                        },
                        {
                            "thickness": 15,
                            "price": 15000,
                            "enter": 150
                        },
                        {
                            "thickness": 16,
                            "price": 17000,
                            "enter": 175
                        },
                        {
                            "thickness": 20,
                            "price": 20000,
                            "enter": 200
                        },
                        {
                            "thickness": 25,
                            "price": 27000,
                            "enter": 225
                        },
                        {
                            "thickness": 30,
                            "price": 35000,
                            "enter": 250
                        },
                        {
                            "thickness": 35,
                            "price": 50000,
                            "enter": 275
                        },
                        {
                            "thickness": 40,
                            "price": 100000,
                            "enter": 300
                        },
                        {
                            "thickness": 50,
                            "price": 250000,
                            "enter": 350
                        },
                        {
                            "thickness": 60,
                            "price": 350000,
                            "enter": 400
                        }
                    ]

                },
                {
                    "id": 8,
                    "name": "Конструкционная сталь",
                    "price": [
                        {
                            "thickness": 1,
                            "price": 850,
                            "enter": 20
                        },
                        {
                            "thickness": 2,
                            "price": 1100,
                            "enter": 30
                        },
                        {
                            "thickness": 3,
                            "price": 1500,
                            "enter": 50
                        },
                        {
                            "thickness": 4,
                            "price": 2500,
                            "enter": 60
                        },
                        {
                            "thickness": 5,
                            "price": 4000,
                            "enter": 70
                        },
                        {
                            "thickness": 6,
                            "price": 6000,
                            "enter": 80
                        },
                        {
                            "thickness": 8,
                            "price": 8000,
                            "enter": 90
                        },
                        {
                            "thickness": 10,
                            "price": 10000,
                            "enter": 100
                        },
                        {
                            "thickness": 12,
                            "price": 12000,
                            "enter": 110
                        },
                        {
                            "thickness": 14,
                            "price": 15000,
                            "enter": 125
                        },
                        {
                            "thickness": 15,
                            "price": 17000,
                            "enter": 150
                        },
                        {
                            "thickness": 16,
                            "price": 19000,
                            "enter": 175
                        },
                        {
                            "thickness": 20,
                            "price": 26000,
                            "enter": 200
                        },
                        {
                            "thickness": 25,
                            "price": 37000,
                            "enter": 225
                        },
                        {
                            "thickness": 30,
                            "price": 65000,
                            "enter": 250
                        },
                        {
                            "thickness": 35,
                            "price": 90000,
                            "enter": 275
                        },
                        {
                            "thickness": 40,
                            "price": 120000,
                            "enter": 300
                        },
                        {
                            "thickness": 50,
                            "price": 350000,
                            "enter": 350
                        },
                        {
                            "thickness": 60,
                            "price": 500000,
                            "enter": 400
                        }
                    ]

                },
                {
                    "id": 9,
                    "name": "Титан",
                    "price": [
                        {
                            "thickness": 1,
                            "price": 850,
                            "enter": 50
                        },
                        {
                            "thickness": 2,
                            "price": 1100,
                            "enter": 150
                        },
                        {
                            "thickness": 3,
                            "price": 1500,
                            "enter": 300
                        },
                        {
                            "thickness": 4,
                            "price":  2500,
                            "enter": 500
                        },
                        {
                            "thickness": 5,
                            "price": 4000,
                            "enter": 1000
                        },
                        {
                            "thickness": 6,
                            "price": 6000,
                            "enter": 2000
                        },
                        {
                            "thickness": 8,
                            "price": 8000,
                            "enter": 3000
                        },
                        {
                            "thickness": 10,
                            "price": 10000,
                            "enter": 4000
                        },
                        {
                            "thickness": 12,
                            "price": 12000,
                            "enter": 5000
                        },
                        {
                            "thickness": 14,
                            "price": 15000,
                            "enter": 6000
                        },
                        {
                            "thickness": 15,
                            "price": 17000,
                            "enter": 7000
                        },
                        {
                            "thickness": 16,
                            "price": 19000,
                            "enter": 8000
                        },
                        {
                            "thickness": 20,
                            "price": 26000,
                            "enter": 11000
                        },
                        {
                            "thickness": 25,
                            "price": 37000,
                            "enter": 12000
                        },
                        {
                            "thickness": 30,
                            "price": 65000,
                            "enter": 13000
                        },
                        {
                            "thickness": 35,
                            "price": 90000,
                            "enter": 15000
                        },
                        {
                            "thickness": 40,
                            "price": 120000,
                            "enter": 20000
                        },
                        {
                            "thickness": 50,
                            "price": 350000,
                            "enter": 25000
                        },
                        {
                            "thickness": 60,
                            "price": 500000,
                            "enter": 35000
                        }
                    ]

                },
                {
                    "id": 10,
                    "name": "Латунь",
                    "price": [
                        {
                            "thickness": 1,
                            "price": 750,
                            "enter": 20
                        },
                        {
                            "thickness": 2,
                            "price": 950,
                            "enter": 30
                        },
                        {
                            "thickness": 3,
                            "price": 1450,
                            "enter": 50
                        },
                        {
                            "thickness": 4,
                            "price": 2000,
                            "enter": 60
                        },
                        {
                            "thickness": 5,
                            "price": 2500,
                            "enter": 70
                        },
                        {
                            "thickness": 6,
                            "price": 3000,
                            "enter": 80
                        },
                        {
                            "thickness": 8,
                            "price": 5000,
                            "enter": 90
                        },
                        {
                            "thickness": 10,
                            "price": 7000,
                            "enter": 100
                        },
                        {
                            "thickness": 12,
                            "price": 10000,
                            "enter": 110
                        },
                        {
                            "thickness": 14,
                            "price": 12000,
                            "enter": 125
                        },
                        {
                            "thickness": 15,
                            "price": 15000,
                            "enter": 150
                        },
                        {
                            "thickness": 16,
                            "price": 17000,
                            "enter": 175
                        },
                        {
                            "thickness": 20,
                            "price": 20000,
                            "enter": 200
                        },
                        {
                            "thickness": 25,
                            "price": 27000,
                            "enter": 225
                        },
                        {
                            "thickness": 30,
                            "price": 35000,
                            "enter": 250
                        },
                        {
                            "thickness": 35,
                            "price": 50000,
                            "enter": 275
                        },
                        {
                            "thickness": 40,
                            "price": 100000,
                            "enter": 300
                        },
                        {
                            "thickness": 50,
                            "price": 250000,
                            "enter": 350
                        },
                        {
                            "thickness": 60,
                            "price": 350000,
                            "enter": 400
                        }
                    ]

                },
                {
                    "id": 11,
                    "name": "Медь",
                    "price": [
                        {
                            "thickness": 1,
                            "price": 750,
                            "enter": 20
                        },
                        {
                            "thickness": 2,
                            "price": 950,
                            "enter": 30
                        },
                        {
                            "thickness": 3,
                            "price": 1450,
                            "enter": 50
                        },
                        {
                            "thickness": 4,
                            "price": 2000,
                            "enter": 60
                        },
                        {
                            "thickness": 5,
                            "price": 2500,
                            "enter": 70
                        },
                        {
                            "thickness": 6,
                            "price": 3000,
                            "enter": 80
                        },
                        {
                            "thickness": 8,
                            "price": 5000,
                            "enter": 90
                        },
                        {
                            "thickness": 10,
                            "price": 7000,
                            "enter": 100
                        },
                        {
                            "thickness": 12,
                            "price": 10000,
                            "enter": 110
                        },
                        {
                            "thickness": 14,
                            "price": 12000,
                            "enter": 125
                        },
                        {
                            "thickness": 15,
                            "price": 15000,
                            "enter": 150
                        },
                        {
                            "thickness": 16,
                            "price": 17000,
                            "enter": 175
                        },
                        {
                            "thickness": 20,
                            "price": 20000,
                            "enter": 200
                        },
                        {
                            "thickness": 25,
                            "price": 27000,
                            "enter": 225
                        },
                        {
                            "thickness": 30,
                            "price": 35000,
                            "enter": 250
                        },
                        {
                            "thickness": 35,
                            "price": 50000,
                            "enter": 275
                        },
                        {
                            "thickness": 40,
                            "price": 100000,
                            "enter": 300
                        },
                        {
                            "thickness": 50,
                            "price": 250000,
                            "enter": 350
                        },
                        {
                            "thickness": 60,
                            "price": 350000,
                            "enter": 400
                        }
                    ]

                },
                {
                    "id": 12,
                    "name": "Алюминий и его сплавы",
                    "price": [
                        {
                            "thickness": 1,
                            "price": 650,
                            "enter": 20
                        },
                        {
                            "thickness": 2,
                            "price": 850,
                            "enter": 30
                        },
                        {
                            "thickness": 3,
                            "price": 1150,
                            "enter": 50
                        },
                        {
                            "thickness": 4,
                            "price": 1350,
                            "enter": 60
                        },
                        {
                            "thickness": 5,
                            "price": 1700,
                            "enter": 70
                        },
                        {
                            "thickness": 6,
                            "price": 2100,
                            "enter": 80
                        },
                        {
                            "thickness": 8,
                            "price": 2900,
                            "enter": 90
                        },
                        {
                            "thickness": 10,
                            "price": 3900,
                            "enter": 100
                        },
                        {
                            "thickness": 12,
                            "price": 4900,
                            "enter": 110
                        },
                        {
                            "thickness": 14,
                            "price": 6000,
                            "enter": 125
                        },
                        {
                            "thickness": 15,
                            "price": 6500,
                            "enter": 150
                        },
                        {
                            "thickness": 16,
                            "price": 7500,
                            "enter": 175
                        },
                        {
                            "thickness": 20,
                            "price": 9000,
                            "enter": 200
                        },
                        {
                            "thickness": 25,
                            "price": 15000,
                            "enter": 225
                        },
                        {
                            "thickness": 30,
                            "price": 27000,
                            "enter": 250
                        },
                        {
                            "thickness": 35,
                            "price": 40000,
                            "enter": 275
                        },
                        {
                            "thickness": 40,
                            "price": 75000,
                            "enter": 300
                        },
                        {
                            "thickness": 50,
                            "price": 150000,
                            "enter": 350
                        },
                        {
                            "thickness": 60,
                            "price": 250000,
                            "enter": 400
                        }
                    ]

                }
            ]
        },
        {
            "serviceId": 38,
            "materials": [
                {
                    "id": 1,
                    "name": "Углеродистая сталь",
                    "price": [
                        {
                            "thickness": 2,
                            "price": 160,
                            "enter": 0
                        },
                        {
                            "thickness": 3,
                            "price": 205,
                            "enter": 0
                        },
                        {
                            "thickness": 4,
                            "price": 260,
                            "enter": 0
                        },
                        {
                            "thickness": 5,
                            "price": 330,
                            "enter": 0
                        },
                        {
                            "thickness": 6,
                            "price": 385,
                            "enter": 0
                        },
                        {
                            "thickness": 8,
                            "price": 510,
                            "enter": 0
                        },
                        {
                            "thickness": 10,
                            "price": 540,
                            "enter": 0
                        },
                        {
                            "thickness": 12,
                            "price": 585,
                            "enter": 0
                        },
                        {
                            "thickness": 14,
                            "price": 700,
                            "enter": 0
                        },
                        {
                            "thickness": 16,
                            "price": 820,
                            "enter": 0
                        },
                        {
                            "thickness": 18,
                            "price": 875,
                            "enter": 0
                        },
                        {
                            "thickness": 20,
                            "price": 1100,
                            "enter": 0
                        },
                        {
                            "thickness": 22,
                            "price": 1200,
                            "enter": 0
                        },
                        {
                            "thickness": 25,
                            "price": 1440,
                            "enter": 0
                        },
                        {
                            "thickness": 30,
                            "price": 1950,
                            "enter": 0
                        },
                        {
                            "thickness": 32,
                            "price": 2580,
                            "enter": 0
                        },
                        {
                            "thickness": 36,
                            "price": 3250,
                            "enter": 0
                        },
                        {
                            "thickness": 40,
                            "price": 3960,
                            "enter": 0
                        },
                        {
                            "thickness": 60,
                            "price": 5000,
                            "enter": 0
                        }
                    ]

                },
                {
                    "id": 2,
                    "name": "Пробивка металла",
                    "price": [
                        {
                            "thickness": 2,
                            "price": 25,
                            "enter": 0
                        },
                        {
                            "thickness": 3,
                            "price": 30,
                            "enter": 0
                        },
                        {
                            "thickness": 4,
                            "price": 35,
                            "enter": 0
                        },
                        {
                            "thickness": 5,
                            "price": 40,
                            "enter": 0
                        },
                        {
                            "thickness": 6,
                            "price": 50,
                            "enter": 0
                        },
                        {
                            "thickness": 8,
                            "price": 75,
                            "enter": 0
                        },
                        {
                            "thickness": 10,
                            "price": 105,
                            "enter": 0
                        },
                        {
                            "thickness": 12,
                            "price": 130,
                            "enter": 0
                        },
                        {
                            "thickness": 14,
                            "price": 150,
                            "enter": 0
                        },
                        {
                            "thickness": 16,
                            "price": 160,
                            "enter": 0
                        },
                        {
                            "thickness": 18,
                            "price": 175,
                            "enter": 0
                        },
                        {
                            "thickness": 20,
                            "price": 180,
                            "enter": 0
                        },
                        {
                            "thickness": 22,
                            "price": 185,
                            "enter": 0
                        },
                        {
                            "thickness": 25,
                            "price": 190,
                            "enter": 0
                        },
                        {
                            "thickness": 30,
                            "price": 205,
                            "enter": 0
                        },
                        {
                            "thickness": 32,
                            "price": 210,
                            "enter": 0
                        },
                        {
                            "thickness": 36,
                            "price": 215,
                            "enter": 0
                        },
                        {
                            "thickness": 40,
                            "price": 220,
                            "enter": 0
                        },
                        {
                            "thickness": 60,
                            "price": 320,
                            "enter": 0
                        }
                    ]

                }
            ]
        },
        {
            "serviceId": 39,
            "materials": [
                {
                    "id": 1,
                    "name": "гибы от 00 мм - до 5 мм ",
                    "price": 250

                },
                {
                    "id": 2,
                    "name": "гибы от 5 мм - до 8 мм",
                    "price": 300

                },
                {
                    "id": 3,
                    "name": "гибы от 8 мм - до 10 мм",
                    "price": 450

                }
            ]
        },
        {
            "serviceId": 40,
            "materials": [
                {
                    "id": 1,
                    "name": "рубка от 0 мм - до 4 мм",
                    "price": 300

                },
                {
                    "id": 2,
                    "name": "рубка от 4 мм -8 мм",
                    "price": 375

                },
                {
                    "id": 3,
                    "name": "рубка от 9 мм - 10 мм",
                    "price": 1000

                },
                {
                    "id": 4,
                    "name": "рубка от 12 мм - 16 мм",
                    "price": 2000

                }
            ]
        }
    ];
    const serviceId = 18;

    let service;
    console.log("before promise");
    let promise = new Promise((resolve, reject) => {
        service = data.filter(current => {
            return current.serviceId === parseInt(serviceId);
        });
        resolve();
    });
    console.log("before promise then");
    promise.then(() => {
        console.log("promise finished");
        if (!service) return false;
        service = service[0];
        const ulMaterials = document.querySelector('.select-dropdown.materials');
        const thicknessField = document.getElementById('thickness');
        const enterInput = document.getElementById('enter');

        if (ulMaterials.children && ulMaterials.children.length > 0) return; // если в ul уже есть li, то добавлять больше не надо
        const materialField = document.getElementById('material');
        service.materials.forEach(material => {
            const li = document.createElement('li');
            li.className = 'select-item';
            li.id = `id${material.id}`;
            li.innerHTML = material.name;
            ulMaterials.insertAdjacentElement('beforeEnd', li);
            li.addEventListener('click', e => {
                ulMaterials.style.display = "none";
                const currentLiValue = materialField.value;
                //console.log(currentLiValue, material.name);
                if (currentLiValue !== material.name) {
                    thicknessField.value = '';
                    THICKNESS = 0;
                }
                materialField.value = material.name;

                if (typeof material.price === 'object') {
                    preparePriceData(material.price);
                } else {
                    thicknessField.setAttribute('disabled', true);
                    enterInput.setAttribute('disabled', true);
                    THICKNESS = 1;
                    PRICE = material.price;
                }
                calculateCost();
            });
        });
    });

    console.log("after promise");

}

function preparePriceData(data) {
    const ulThickness = document.querySelector('.select-dropdown.thickness');
    const thicknessField = document.getElementById('thickness');

    data.forEach(item => {
        const li = document.createElement('li');
        li.className = 'select-item';
        li.innerHTML = item.thickness;
        ulThickness.insertAdjacentElement('beforeEnd', li);
        li.addEventListener('click', e => {
            PRICE = item.price;
            ENTER = item.enter;
            thicknessField.value = item.thickness;
            ulThickness.style.display = "none";
            THICKNESS = item.thickness;

            calculateCost();
        });
    });
}

function calculateCost() {
    const resultSpan = document.querySelector('.result');
    //console.log(`PRICE=${PRICE}; LENGTH=${LENGTH}; THICKNESS=${THICKNESS}`);
    if (!PRICE || PRICE === 0 || !LENGTH || LENGTH ===0 || !THICKNESS || THICKNESS === 0) {
        resultSpan.innerHTML = "";
        return;
    }

    const enterInput = document.getElementById('enter');
    let price = PRICE;
    if (typeof PRICE === 'object') {
        const len = LENGTH < 101 ? 100 : LENGTH >= 101 && LENGTH <= 500 ? 500 : 3000;
        price = PRICE['until_'+len];
    }

    let enter = enterInput.checked ? ENTER : 0;

    const cost = (price + enter)*LENGTH;
    //console.log(enterInput.checked);
    //resultSpan.innerHTML = `cost=${cost}; PRICE=${price}; LENGTH=${LENGTH}; ENTER=${enter}`;
    resultSpan.innerHTML = `Стоимость: ${cost}`;
}