import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Icon from '@material-ui/core/Icon';

import {
  StyledTableRowHead,
  MyTablesortLabel,
  StyledTableCellHead
} from "./TableStyles";

function Header(props) {
  const { setHeaderOrder, headers, noDrag } = props;
  let FinalResult = [ ...headers ];

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onEnd = result => {
    if (result.destination) {
      FinalResult = reorder(
        FinalResult,
        result.source.index,
        result.destination.index
      );
      setHeaderOrder(FinalResult);
    }
  };

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    ...draggableStyle
  });

  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "257aa0" : "257aa0"
  });

  return (
    <DragDropContext onDragEnd={onEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided, snapshot) => (
          <StyledTableRowHead
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}>
            {headers && Array.isArray(FinalResult) && FinalResult.length > 0 ? FinalResult.map((item, index) => (
              item.value ? (
                <StyledTableCellHead>
                    {item.name}
                    <Draggable key={item.value} isDragDisabled={noDrag} draggableId={item.value} index={index}>
                        {(provided, snapshot) => (
                            <div ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                            >star</div>
                        )}
                    </Draggable>
                </StyledTableCellHead>
              ) : null)) : null}
            {provided.placeholder}
          </StyledTableRowHead>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Header;
