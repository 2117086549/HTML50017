/**
 * playgame.js
 *
 * Copyright (c) 2013 Petar Petrov
 *
 * This work is licensed under the Creative Commons Attribution-NoDerivs 3.0 Unported License. 
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nd/3.0/.
 */

game.PlayScene = me.ScreenObject.extend({

    SceneStates: {
        InitBoard: 10,
        HumanMove: 20,
        AIMove: 30,
        GameOver: 40
    },

    init: function() {
        // use the update & draw functions
        this.parent(true);
        this.state = this.SceneStates.InitBoard;
    },

    update: function() {
        switch(this.state) {
            case this.SceneStates.HumanMove:
            break;
            case this.SceneStates.AIMove:
            break;
        }
        // game.gamemaster.update();
    },

    draw: function(ctx) {
        me.video.clearSurface(ctx, 'black'); 
    },
    /**        
     * Action to perform on state change
     */
    onResetEvent: function() {        
        // prep. new game

        game.map.reset();
        game.gamemaster.reset(game.gamemaster.Wizards.Earth);
        
        // add gfx entities

        // me.entityPool.add("earth_wizard", game.EarthWizardEntity, true);
        // var wizard = me.entityPool.newInstanceOf("earth_wizard", 50, 50, {});
        me.game.world.addChild(new game.EarthWizardEntity(0, 0, {}));
        me.game.world.addChild(new game.WaterWizardEntity(14, 0, {}));
        //me.game.world.addChild(new game.EarthWizardEntity(14, 0, {}));
        //me.game.world.addChild(new game.EarthWizardEntity(14, 0, {}));

        // add game scene entities 
        this.gameboard = new game.BoardEntity();
        me.game.world.addChild(this.gameboard);

        // add HUD entities
        me.game.world.addChild(new game.HUD.PlayerTurnDialog());
         
        // Start game
        this.state = this.SceneStates.HumanMove;
    },
    /**        
     * Action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        // remove actors
        var wizards = me.game.getEntityByProp('type', 'wizard') || [];
        for (var i = 0; i < wizards.length; i++) {
            me.game.world.removeChild(wizards[i]);
        }
        // remove the HUD from the game world
        me.game.world.removeChild(me.game.world.getEntityByProp("name", "HUD")[0]);
    }
});