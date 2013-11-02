/**
 * playgame.js
 *
 * Copyright (c) 2013 Petar Petrov
 *
 * This work is licensed under the Creative Commons Attribution-NoDerivs 3.0 Unported License. 
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nd/3.0/.
 */

game.playScene = me.ScreenObject.extend({

    init: function() {
        // use the update & draw functions
        this.parent(true); 
    },

    update: function() {

    },

    draw: function(ctx) {
        me.video.clearSurface(ctx, 'black'); 
    },

    /**        
    *  action to perform on state change
    */
    onResetEvent: function() {        
        // reset board state
        game.map.reset();
        
        // me.entityPool.add("earth_wizard", game.EarthWizardEntity, true);
        // var wizard = me.entityPool.newInstanceOf("earth_wizard", 50, 50, {});
        me.game.world.addChild(new game.EarthWizardEntity(0, 0, {}));

        // add game scene entities 
        //me.game.add(new game.HUD.Container());
        me.game.add(new game.BoardEntity());
    },


    /**        
    *  action to perform when leaving this screen (state change)
    */
    onDestroyEvent: function() {
        // remove the HUD from the game world
        me.game.world.removeChild(me.game.world.getEntityByProp("name", "HUD")[0]);
    }
});