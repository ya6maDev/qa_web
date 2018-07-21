import React from 'react';

const DetailGrid = ({qas}) => (
    <div>
        <Table striped bordered condensed hover>
            <thead>
                <tr>
                <th>質問</th>
                <th>回答</th>
                </tr>
            </thead>
            <tbody>
                {qas.map(qa => (
                    <tr>
                    <td>qa.question</td>
                    <td>qa.answer</td>
                    </tr>
                )
                )}
            </tbody>
        </Table>
    </div>
);

export default DetailGrid;