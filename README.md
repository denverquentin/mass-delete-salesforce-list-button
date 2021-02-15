# mass-delete-salesforce-list-button
This is on click Javascript you can put in a list button on any custom or standard object to mass delete records. This only works in classic mode.


## Setup Steps
1. Click the `New Button or Link` button on any standard or custom object.
2. Enter `Mass Delete` for the Label and `list button to delete multiple records at a time` for the Description. Select `List Button` for Display Type and click the `Display Checkboxes` checkbox. Select `Execute JavaScript` for Behavior and `OnClick JavaScript` for Content Source.
3. Paste the javascript in [mass-delete-javascript-for-list-button.js](mass-delete-javascript-for-list-button.js) into the list button field and click the Save button.
4. Next, go to the `Search Layouts` section of the object that has `Mass Delete` button.
5. Click `Edit` next to the List View layout, add the `Mass Delete` button to the `Selected Buttons` picklist and click the Save button.

## How to Use
On the list view, check the box next to all the records you want to delete. You can also check the box at the very top to select all. Then click the `Mass Delete` button. An alert will tell you how many records were deleted or show you an error for records that could not be deleted.
