
       function   getInputSelection() {
    const input = document.createElement('div');
    input.classList.add("photographer__filter");
    
           input.innerHTML = `
            
          
           <h2 class="photographer__filter--label">Trier par</h2>
           <!-- Default option -->
           <div
               class="photographer__filter--select FE-button"
               id="click"
               role="button"
               tabindex="0"
               aria-label="trier les médias par ..."
               aria-haspopup="true"
               aria-expanded="false"
               aria-selected="true"
           >
               <h3 class="photographer__filter--active"></h3>
               <i class="fa-solid fa-angle-down"></i>
           </div>
           <!-- All options -->
           <div class="photographer__filter--menu FE-button" id="option">
               <div
                   id="filter-popularite"
                   class="photographer__filter--option FE-button"
                   role="listbox"
                   tabindex="0"
                   aria-label="tri des médias par popularité"
                   aria-selected="true"
               >
                   <h4 class="photographer__filter--optionname">Popularité</h4>
                   <i class="fa-solid fa-angle-up"></i>
               </div>
               <div class="photographer__filter--separator"></div>
               <div
                   id="filter-date"
                   class="photographer__filter--option FE-button"
                   role="listbox"
                   tabindex="0"
                   aria-label="tri des médias par date"
                   aria-selected="false"
               >
                   <h4 class="photographer__filter--optionname">Date</h4>
               </div>
               <div class="photographer__filter--separator"></div>
               <div
                   id="filter-titre"
                   class="photographer__filter--option FE-button"
                   role="listbox"
                   tabindex="0"
                   aria-label="tri des médias par titre"
                   aria-selected="false"
               >
                   <h4 class="photographer__filter--optionname">Titre</h4>
               </div>
           </div>
        `
           
              
    return (input); 
    
} 
export {getInputSelection}; 
