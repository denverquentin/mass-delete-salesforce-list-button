{!REQUIRESCRIPT('/soap/ajax/9.0/connection.js')}

// $ObjectType is irrelevant - this will work for any standard or custom object
var records = {!GETRECORDIDS($ObjectType.Contact)};

if (records[0] == null) {
	alert('Please select at least one record.');
} else {
	var errors = [];
	var result = sforce.connection.deleteIds(records);
	if (result && result.length) {
		var numFailed = 0;
		var numSucceeded = 0;
		for (var i = 0; i < result.length; i++) {
			var res = result[i];
			if (res && res.success == 'true') {
				numSucceeded++;
			} else {
				var es = res.getArray('errors');
				if (es.length > 0) {
					errors.push(es[0].message);
				}
				numFailed++;
			}
		}
		if (numFailed > 0) {
			alert('Failed: ' + numFailed + '\nSucceeded: ' + numSucceeded + ' \n Due to: ' + errors.join('\n'));
		} else {
			alert('Number of records deleted: ' + numSucceeded);
		}
	}
	window.location.reload();
}
