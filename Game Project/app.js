new Vue({
      el: "#app",
      data: {
            playerHealth: 100,
            bossHealth: 100,
            battle: false,
            turns: []
      },
      methods: {
            fightOn: function() {
                  this.battle = true;
                  this.playerHealth = 100;
                  this.bossHealth = 100;
                  this.turns = [];
            },
            combo: function() {
                  var dmg = this.calcDmg(2, 25);
                  this.bossHealth -= dmg;
                  this.turns.unshift({
                        isUser: true,
                        log: "Player dealt " + dmg + '!'
                  });
                  if (this.matchWon()) {
                        return;
                  }
                  this.bossCombo();
            },
            superCombo: function() {
                  var dmg = this.calcDmg(4, 30);
                  this.bossHealth -= dmg;
                  this.turns.unshift({
                        isUser: true,
                        log: "Critical Hit  !  " + dmg + '!'
                  });
                  if (this.matchWon()) {
                        return;
                  }
                  this.bossCombo();
            },
            bossCombo: function() {
                  var dmg = this.calcDmg(2, 25);
                  this.playerHealth -= dmg;
                  this.turns.unshift({
                        isUser: false,
                        log: "Boss dealt  " + dmg + '!'
                  });
                  if (this.matchLost()) {
                        return;
                  }
            },
            useItm: function() {
                  if (this.playerHealth <= 90) {
                        this.turns.unshift({
                              isUser: true,
                              log: "Player healed for 10 health !"
                        });
                        this.playerHealth += 10;
                        this.bossCombo();
                  } else {
                        this.playerHealth = 100;
                        this.turns.unshift({
                              isUser: true,
                              log: "Health maxed !"
                        });
                        this.bossCombo();
                  }
            },
            flee: function() {
                  this.battle = false;
                  this.playerHealth = 0;
                  this.bossHealth = 0;
                  confirm("You died in the process of fleeing");
            },
            calcDmg: function(min, max) {
                  return Math.max(Math.floor(Math.random() * max) + 1, min);
            },
            matchWon: function() {
                  if (this.bossHealth <= 0) {
                        this.bossHealth = 0;
                        setTimeout(() => {
                              if (confirm("GG! Fight again?")) {
                                    this.fightOn();
                              } else {
                                    this.battle = false;
                              }
                        }, 500);
                        return true;
                  }
                  return false;
            },
            matchLost: function() {
                  if (this.playerHealth <= 0) {
                        this.playerHealth = 0;
                        setTimeout(() => {
                              if (confirm("BG! Fight again?")) {
                                    this.fightOn();
                              } else {
                                    this.battle = false;
                              }
                        }, 500);
                        return true;
                  }
                  return false;
            }
      }
});