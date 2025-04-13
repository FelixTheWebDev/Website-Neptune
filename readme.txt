/*  quick selectors helpers */

    /* exactly every (1)st span element in a .container class */
    .container span:nth-child(1) { }

    /* exactly every (2)nd span element in a .container class */
    .container span:nth-child(2) { }

    /* exactly every (3)nd span element in a .container class */
    .container span:nth-child(3) { }

    /* every second span element in a .container class */
    .container span:nth-child(n+1) { }



/* stylesheet include guide for a consistent file structure */
/*
 * base 
    # reset.css         |   css reset 
    # variables.css     | .
    # globals.css       | .



/* stylesheet guide for a consistent order of properties */
/*
    * 1 | layout & spacing
    * 2 | styling & text
    * 3 | animation
* /


/* layout props */
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 100%;
    height: auto;
/* spacing */
    padding: 1rem;
    margin-top:20px;

/* styling */
    border-radius: 0.3rem;
    background-color: rgb(0, 97, 224);


/* text props */
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2rem;
    font-weight: 400;
    line-height: 2rem;

    text-align: left;
    text-decoration: none;
    color: white;

/* animation */
    z-index: 1;