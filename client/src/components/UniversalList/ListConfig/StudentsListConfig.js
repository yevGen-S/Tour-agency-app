// import ModalStudents from '../Modal/ModalStudents';

// const leftStringIncludesRight = (left, right) => {
//     return String(left)
//         .toLocaleLowerCase()
//         .includes(String(right).toLocaleLowerCase());
// };

// export const studentsListConfig = {
//     asyncGetItems: getStudents,
//     /**
//      * columns names
//      */
//     editableListHead: [
//         'Имя',
//         'номер телефона',
//         'Статус',
//         'Группа',
//         'Семестр',
//         'Направление',
//         'Институт',
//         'Действие',
//     ],

//     /**
//      * row settings
//      */
//     getListRow: (student) => {
//         return {
//             heading: {
//                 mainText: `${student.name || 'неизвестно'} ${
//                     student.surname || 'неизвестно'
//                 }`,
//                 secondaryText: student.email,
//             },
//             tableItems: [
//                 student.phone_number,
//                 // getStudentStatus(student.student_status),
//                 student.group_code,
//                 student.semestr_number,
//                 student.direction_name,
//                 student.institute_name,
//             ],
//             actionName: 'изменить',
//         };
//     },
//     searchConfig: {
//         searchBy: (student, searchInput) => {
//             return (
//                 leftStringIncludesRight(student.name, searchInput) ||
//                 leftStringIncludesRight(student.surname, searchInput) ||
//                 leftStringIncludesRight(
//                     // getStudentStatus(student.student_status),
//                     searchInput
//                 ) ||
//                 leftStringIncludesRight(student.group_code, searchInput) ||
//                 leftStringIncludesRight(student.semestr_number, searchInput) ||
//                 leftStringIncludesRight(student.direction_name, searchInput) ||
//                 leftStringIncludesRight(student.institute_name, searchInput) ||
//                 leftStringIncludesRight(student.email, searchInput) ||
//                 leftStringIncludesRight(student.phone_number, searchInput)
//             );
//         },
//         searchPlaceholder: 'Поиск студента',
//     },
//     modal: {
//         modalName: 'Редактировать студента',
//         modalContent: (item, handleClose) => (
//             <ModalStudents student={item} handleClose={handleClose} />
//         ),
//     },
// };
