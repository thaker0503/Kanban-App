export const data = [
  {
    id: '1',
    Task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.',
    Due_Date: '25-May-2020',
  },
  {
    id: '2',
    Task: 'Fix Styling',
    Due_Date: '26-May-2020',
  },
  {
    id: '3',
    Task: 'Handle Door Specs',
    Due_Date: '27-May-2020',
  },
  {
    id: '4',
    Task: 'morbi',
    Due_Date: '23-Aug-2020',
  },
  {
    id: '5',
    Task: 'proin',
    // Assigned_To: 'Bondon',
    // Assignee: 'Antoinette',
    // Status: 'In Progress',
    // Priority: 'Medium',
    Due_Date: '05-Jan-2021',
  },
];

export const columnsFromBackend = {
  1: {
    title: 'To-do',
    items: data,
  },
  2: {
    title: 'In Progress',
    items: [],
  },
  3: {
    title: 'Done',
    items: [],
  },
};
