import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import CardItem from "./CardItem";
import { columnsFromBackend } from "./fixtures";
import "./tableStyle.scss";

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};
const columnTitle = (props) => {
  const { name, type, count } = props;
  console.log("props col", props);
  return (
    <div className={`note shadow-sm note-${type}`}>
      <span>{name + " - " + count} </span>
    </div>
  );
};
function Table2() {
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <div className="table-main">
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column"
              }}
              key={columnId}
            >
              {columnTitle({ ...column, count: column.items.length })}
              <div className="m-2">
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "#d3d3d345"
                            : "transparent",
                          padding: 4,
                          width: "15rem",
                          minHeight: 500
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(providedProps, snapshotProps) => {
                                return (
                                  <div
                                    ref={providedProps.innerRef}
                                    {...providedProps.draggableProps}
                                    {...providedProps.dragHandleProps}
                                    className="px-1"
                                    style={{
                                      userSelect: "none",
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      color: "#5e6da6",
                                      ...providedProps.draggableProps.style
                                    }}
                                  >
                                    <CardItem
                                      style={{
                                        backgroundColor: snapshotProps.isDragging
                                          ? "#e9ecef"
                                          : "#ffffff"
                                      }}
                                      {...item}
                                      col={column}
                                    />
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default Table2;
