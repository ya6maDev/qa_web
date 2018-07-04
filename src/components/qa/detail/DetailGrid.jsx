import React from 'react';

const DetailGrid = ({question, answer}) => (
    <div>
        <h4>
            質問: {question}
        </h4>
        <h4>
            回答: {answer}
        </h4>
    </div>
);

export default DetailGrid;