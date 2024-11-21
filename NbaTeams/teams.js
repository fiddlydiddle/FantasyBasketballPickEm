$(document).ready(() => {
    initTeamsTable();
    populateTeams();
});

function initTeamsTable() {
    const columns = [
        { displayName: 'Location', key: 'Location'},
        { displayName: 'Name', key: 'Name'},
    ];
    $('#team-table').initCustomTable(columns);
    $('#team-table').setData(teams);
}