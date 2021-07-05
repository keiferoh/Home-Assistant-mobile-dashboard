# Home Assistant Mobile Dashboard
#
 This repository contains the raw configuration for my
 Home Assistant Mobile Dashboard
 You will need the following custom components:
#
 Custom Button Card:
 https://github.com/custom-cards/button-card
#
 Swipe Card:
 https://github.com/bramkragten/custom-ui/tree/master/swipe-card
#
 State Switch:
 https://github.com/thomasloven/lovelace-state-switch
#
 Custom Home Card
 https://community.home-assistant.io/t/lovelace-home-card/103260
#
 I haven't cleaned up all of the YAML code yet, so there may be some
 duplication of formatting between the cards and the templates.
#
 I have also included the folder home-card which contains
 my customized setup for the  Home Assistant Custom Home Card.
 You will still need to install Home Card from the repository listed above.
#
 I would recommend creating a new Lovelace dashboard
 and copy the file "My Mobile Dashboard with Templates.yaml"
 into this new dashboard. This way your current Lovelace dashboard(s) should
 be unaffected.
#
 (This may be a good time to create a Snapshot
   of your current config just in case)
#
 1. Click "Configuration" from the sidebar
 2. Click Lovelace Dashboards from the "Configure Home Assistant Page"
 3. Click "+ Add Dashboard" from the lower right corner
 4. Give your dashboard a Title and click "Create"
 5. Return to the sidebar and select the new dashboard you just created
 6. It should auto populate with your entities.
 7. Open the Lovelace UI Menu by clicking the 3 dots in the upper right corner
 8. Click "Edit Dashboard"
 9. You will receive a prompt to take control of your Lovelace UI
10. Click the radio button to "Start with an empty dashboard"
    and click "Take control"
11. You now have an empty dashboard.
12. While still in the Lovelace Edit UI screen click
    the 3 dots in the upper right
    corner again and select "Raw configuration editor"
13. Delete the default entries. You will replace them with the code in step 14.
13. Open the file "My Mobile Dashboard with Templates.yaml" from my repository,
    select all and copy to your computer's clipboard
14. Paste the yaml code copied from step 13 into the Lovelace dashboard you
    opened in step 12 and save.
#
At this point you will need to edit the individual cards or the raw yaml
in order to replace my entities with yours.
