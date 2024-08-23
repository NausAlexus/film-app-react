import './Checkbox.css';

function CheckboxName ({toggleSortName}) {
    return(
        <>
            <label for="checkbox-name" className="checkbox-label-name">
            <input onChange={toggleSortName} type="checkbox" id="checkbox-name" className="checkbox-name"/>
            <span className="checkbox-view-name">
                <svg className="checkbox-icon-name" xmlns="http://www.w3.org/2000/svg" width="13" viewBox="0 0 511.985 511.985">
                    <path fill="#fff" d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z"/>
                </svg>
            </span>
            Отсортировать по названию
            </label>
        </>
    );
};

export default CheckboxName;