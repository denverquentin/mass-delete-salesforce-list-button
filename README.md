# mass-delete-salesforce-list-button
This is on click Javascript you can put in a list button on any custom object to mass delete records. This only works in classic mode.


# Setup Steps
1. Click the `New Button or Link` button on any standard or custom object.
2. Enter `Mass Delete` for the Label and `list button to delete multiple records at a time` for the Description. Select `List Button` for Display Type and click the `Display Checkboxes` checkbox. Select `Execute JavaScript` for Behavior and `OnClick JavaScript` for Content Source.
3. Paste the javascript in [mass-delete-javascript-for-list-button.js](mass-delete-javascript-for-list-button.js) into the list button field and click the Save button.
4. Next, go to the `Search Layouts` section of any standard or custom object.
5. Click `Edit` next to the List View layout, add the `Mass Delete` button to the `Selected Buttons` picklist and click the Save button.
