import React, { useState, useEffect } from 'react';
import H2 from '../typography/H2';
import H3 from '../typography/H3';
import P from '../typography/P';
import ToggleBatch from '../APIComponents/ToggleBatch';

export default function Batches() {
    const [showBatch, setShowBatch] = useState({});
    const [batchData, setBatchData] = useState([]);

    useEffect(() => {
        fetch('https://aj2709.pythonanywhere.com/Courses/batchDetails')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'Success') {
                    const groupedBatches = groupBatchesByCourse(data.BatchData);
                    setBatchData(groupedBatches);
                }
            })
            .catch(error => console.error('Error fetching batch details:', error));
    }, []);

    const toggleBatch = (batchId) => {
        setShowBatch(prevState => ({ ...prevState, [batchId]: !prevState[batchId] }));
    };

    const groupBatchesByCourse = (batchData) => {
        const groupedBatches = {};

        for (const batchId in batchData) {
            const batch = batchData[batchId];
            const courseId = batch.CourseId;
            if (!groupedBatches[courseId]) {
                groupedBatches[courseId] = {
                    CourseName: batch.CourseName,
                    batches: [],
                };
            }
            groupedBatches[courseId].batches.push(batch);
        }

        return Object.values(groupedBatches);
    };

    return (
        <main>
            {batchData.map(course => (
                <div key={course.CourseName}>
                    <div className="bg-light rounded-xl px-8 py-6 mt-10">
                        <div className="flex justify-between px-4">
                            <H2 className="!text-3xl">{course.CourseName}</H2>
                            <button
                                className='max-w-max text-primary underline'
                                onClick={() => toggleBatch(course.CourseName)}>
                                {showBatch[course.CourseName] ? 'Hide Slots' : 'View Slots'}
                            </button>
                        </div>
                        {showBatch[course.CourseName] && (
                            <div>
                                <div className="flex justify-between my-3 px-4">
                                    <H3 className="text-primary !text-2xl">Current Batch Slot</H3>
                                    {/* <button className='max-w-max text-primary underline'>+ Add New Slots</button> */}
                                </div>
                                {course.batches.map((batch) => (<div key={batch.Id} className="flex justify-between my-2 border-b-2 py-2 px-4">
                                    <P>{batch.BatchSLot}</P>
                                    <ToggleBatch  avail={batch.Available} batchId={batch.Id} />
                                </div>))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </main>
    );
}
