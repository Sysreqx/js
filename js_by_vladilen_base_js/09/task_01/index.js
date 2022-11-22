const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария',
    'Светлана', 'Артем', 'Глеб'];

const giveParcel = () => {
    let p = peopleWaiting.shift();
    console.log(`${p} получил посылку. В оченери осталось ${peopleWaiting.length} человек`);
};

const leaveQueueWithoutParcel = () => {
    let p = peopleWaiting.pop();
    console.log(`${p} не получил посылку и ушел(а) из очереди`);
}

giveParcel();
leaveQueueWithoutParcel();
giveParcel();
