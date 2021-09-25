const myjson = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ];


document.querySelectorAll('.nav').forEach( item => {
    item.addEventListener('click', e => {
        const elemId = e.target.getAttribute('id');

        doesSomeStuff(elemId);

    });
});


function doesSomeStuff(elementID){
    /*Add the Class clicked to the clicked list item*/
    /* Turn the selected element's color to white */
    document.querySelectorAll('.nav').forEach(
      x =>{ x.classList.remove('clicked'); }
    );
    document.getElementById(elementID).classList.add('clicked');
    /*-----------------------------------------------------*/


    myjson.forEach(group => {
      const title = group.title.toLocaleLowerCase().replace(/\s+/g, '');;
      const idC = `${title}-current`;
      const idP = `${title}-previous`;
      document.getElementById(idC).innerHTML = `${group.timeframes[elementID].current}hrs`;

      switch(elementID){
        case 'daily':
          document.getElementById(idP).innerHTML = `Yesterday - ${group.timeframes[elementID].previous}hrs`;
          break;
        case 'weekly':
          document.getElementById(idP).innerHTML = `Last Week - ${group.timeframes[elementID].previous}hrs`;
          break;
        case 'monthly':
          document.getElementById(idP).innerHTML = `Last Month - ${group.timeframes[elementID].previous}hrs`;
          break;
      }
    });
}



window.onload = doesSomeStuff('weekly');