import React, { Component, useEffect, useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import {
  IconBarrier,
  IconCamera,
  IconDot,
  IconDownload,
  IconDrag,
  IconLocation,
  IconPencil,
  IconPlus,
  IconThreeDots,
  IconWallClock,
} from '../../assets/images';
import ButtonFilled from '../buttons/ButtonFilled';
import './style.css';
import data from '../../assets/data/tempData.json';
import { formatDate } from '../../utils/formatValues';
import Modal from '../modal';
import { InputText } from '../forms';
import { Button, ButtonMenu, ButtonOutline } from '../buttons';

let tempData = data;

/* Parent */
const SortableItem = SortableElement(({ value }) => {
  const [customValue, setCustomValue] = useState(value?.title || '');
  const [showModalDelete, setShowModalDelete] = useState(false);

  useEffect(() => {
    setCustomValue(value?.title || '');
  }, [value]);

  const onDelete = () => {
    tempData = tempData.filter((e) => e.id !== value?.id);
    setShowModalDelete(false);
  };

  return (
    <div className="border border-[#DFE5EE] rounded-lg mt-[27px] p-3 bg-white">
      <div className="justify-between relative flex items-center w-full">
        <div className="sortableItem">
          <img
            src={IconDrag}
            alt="icon"
            className="mr-2 hover:cursor-pointer"
          />
          <input
            type="text"
            value={customValue}
            placeholder="tab here"
            style={{ width: `${customValue && customValue?.length * 13}px` }}
            onChange={({ target }) => {
              setCustomValue(target.value);
              tempData = tempData.map((e) => {
                if (e.id === value?.id) {
                  return { ...e, title: target.value };
                }
                return e;
              });
            }}
          />{' '}
          <img
            src={IconPencil}
            alt="icon"
            className="ml-2 hover:cursor-pointer"
          />
        </div>
        <ButtonMenu onClick={() => setShowModalDelete(true)} />
      </div>
      <ChildTableDragDrop items={value || []} />
      <Modal
        closeModal={() => setShowModalDelete(false)}
        showModal={showModalDelete}
        title="Konfirmasi Hapus"
      >
        <div className="w-full">
          <p>
            Apakah Anda yakin untuk menghapus <b>{value?.title}</b> ?
          </p>
          <div className="flex w-full">
            <Button
              className="mt-3 w-full text-center flex justify-center py-4 mr-1"
              title="Ya"
              type="primary"
              onClick={onDelete}
            />
            <ButtonOutline
              className="mt-3 w-full text-center flex justify-center py-4 ml-1"
              title="Tidak"
              type="primary"
              onClick={() => setShowModalDelete(false)}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
});

const SortableList = SortableContainer(({ items }) => {
  const [customItems, setCustomItems] = useState(items);

  useEffect(() => {
    setCustomItems(items);
  }, [items]);
  return (
    <ul>
      {customItems?.map((value, index) => {
        return (
          <SortableItem key={`item-${index}`} index={index} value={value} />
        );
      })}
      <ButtonFilled
        onClick={() => {
          setCustomItems([
            ...customItems,
            {
              id: customItems[customItems?.length - 1]?.id + 1,
              title: '',
              materials: [],
            },
          ]);
          tempData = [
            ...customItems,
            {
              id: customItems[customItems?.length - 1]?.id + 1,
              title: '',
              materials: [],
            },
          ];
        }}
        title="Add Session"
        type="primary"
        icon={IconPlus}
        iconPosition="left"
        className="float-right mt-4 mb-20"
      />
    </ul>
  );
});

const TableDragDrop = () => {
  const [items, setItems] = useState(tempData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setItems(tempData);
    setLoading(false);
  }, [tempData]);

  const move = (collection, fromIndex, toIndex) => {
    const result = [];
    const shift = toIndex - fromIndex > 0 ? 1 : -1;
    const start = toIndex < fromIndex ? toIndex : fromIndex;
    const end = start < toIndex ? toIndex : fromIndex;

    for (let index = 0; index < collection.length; index++) {
      var offset = index >= start && index <= end ? shift : 0;
      result[index] = collection[index + offset];
    }

    result[toIndex] = collection[fromIndex];
    tempData = result;
    return result;
  };

  const handleSortEnd = ({ oldIndex, newIndex }) => {
    setItems(
      move(
        items?.length === tempData?.length ? items : tempData,
        oldIndex,
        newIndex
      )
    );
  };

  return (
    <React.Fragment>
      {loading ? null : (
        <SortableList items={items} lockAxis="y" onSortEnd={handleSortEnd} />
      )}
    </React.Fragment>
  );
};

/* Children */
const ChildSortableItem = SortableElement(({ value }) => (
  <div className="pl-4 w-full mt-2">
    <div className="justify-between relative flex items-center w-full">
      <div className="flex items-center text-[16x]">
        <img src={IconDrag} alt="icon" className="mr-4 hover:cursor-pointer" />
        <div
          className={
            value?.type === 1
              ? 'p-3 bg-[#F6F8FC] rounded-[8px] mr-3'
              : 'py-[10px] px-[15px] bg-[#F6F8FC] rounded-[8px] mr-3'
          }
        >
          <img
            src={value?.type === 1 ? IconCamera : IconLocation}
            alt="icon"
            className={
              value?.type === 1
                ? 'h-[12px] hover:cursor-pointer'
                : 'h-[15px] hover:cursor-pointer'
            }
          />
        </div>
        {value?.title}{' '}
        <img
          src={IconBarrier}
          alt="icon"
          className="mx-2 hover:cursor-pointer h-[20px]"
        />
        <label className="text-primary text-[#6F32D2]">Required</label>
        {value?.previewable && (
          <span className="text-[#8189A2] flex">
            <img src={IconDot} alt="icon" className="mx-3" />
            Previewable
          </span>
        )}
      </div>
      <div className="flex items-center text-[16x]">
        <img src={IconWallClock} alt="icon" className="mr-2" />
        {formatDate(value?.date)}
        <img src={IconDot} alt="icon" className="mx-3" />
        <img src={IconWallClock} alt="icon" className="mr-2" />
        {value?.duration}
        {value?.downloadable && (
          <div className="flex">
            <img src={IconDot} alt="icon" className="mx-3" />
            <img src={IconDownload} alt="icon" className="mr-2" />
            Downloadable
          </div>
        )}
        <div className="px-[12px] py-[15px] bg-[#F6F8FC] rounded-[8px] hover:cursor-pointer hover:opacity-[0.5] ml-2">
          <img src={IconThreeDots} alt="icon" className="rotate-90" />
        </div>
      </div>
    </div>
  </div>
));

const ChildSortableList = SortableContainer(({ items }) => {
  const [item, setItem] = useState(items);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [duration, setDuration] = useState();

  useEffect(() => {
    setItem(items);
  }, [items]);

  return (
    <React.Fragment>
      <Modal
        closeModal={() => setShowModal(false)}
        showModal={showModal}
        title="Tambah Materi"
      >
        <div className="w-[600px]">
          <InputText
            label="Title"
            placeholder="Tilte"
            setValue={setTitle}
            value={title}
            type="text"
          />
          <InputText
            label="Date"
            placeholder="dd MMMM yyyy"
            setValue={setDate}
            value={date}
            type="date"
          />
          <InputText
            label="Duration"
            placeholder="Duration"
            setValue={setDuration}
            value={duration}
            type="text"
          />
          <Button
            className="mt-3 w-full text-center flex justify-center py-4"
            title="Submit"
            type="primary"
            disabled={!title || !date || !duration}
            onClick={() => {
              setItem([
                ...item,
                {
                  id: item?.length > 0 ? item[item?.length - 1].id : 1,
                  type: 1,
                  title: title,
                  required: true,
                  previewable: true,
                  date: date,
                  duration: `${duration} Min`,
                  downloadable: true,
                },
              ]);
              setShowModal(false);
            }}
          />
        </div>
      </Modal>
      <ul>
        {item?.map((value, index) => {
          return (
            <ChildSortableItem
              key={`item-${index}`}
              index={index}
              value={value}
            />
          );
        })}
        <div
          className="flex items-center mt-4 hover:text-[#6F32D2] hover:cursor-pointer"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <ButtonFilled
            title=""
            type="primary"
            icon={IconPlus}
            iconPosition="right"
            className="py-3 px-3 ml-4 mr-2"
            iconClassName="h-3"
          />
          Add Lesson Material
        </div>
      </ul>
    </React.Fragment>
  );
});

class ChildTableDragDrop extends Component {
  state = {
    items: this.props.items?.materials,
  };

  move(collection, fromIndex, toIndex) {
    const result = [];
    const shift = toIndex - fromIndex > 0 ? 1 : -1;
    const start = toIndex < fromIndex ? toIndex : fromIndex;
    const end = start < toIndex ? toIndex : fromIndex;

    for (let index = 0; index < collection.length; index++) {
      var offset = index >= start && index <= end ? shift : 0;
      result[index] = collection[index + offset];
    }

    result[toIndex] = collection[fromIndex];
    tempData = tempData.map((e) => {
      if (e?.id === this.props.items?.id) {
        return { ...e, materials: result };
      }
    });
    // tempData = result;
    return result;
  }

  handleSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ items }) => ({
      items: this.move(items, oldIndex, newIndex),
    }));
  };

  render() {
    return (
      <React.Fragment>
        <ChildSortableList
          items={this.state.items}
          lockAxis="y"
          onSortEnd={this.handleSortEnd}
        />
      </React.Fragment>
    );
  }
}

export default TableDragDrop;

// class TableDragDrop extends Component {
//   state = {
//     items: tempData,
//   };

//   componentDidUpdate(_prevProps, prevState) {
//     console.log(tempData, ' tempData');
//     if (prevState.items !== this.state.items) {
//       this.setState({ ...this.state, items: tempData });
//     }
//   }

// move(collection, fromIndex, toIndex) {
//   const result = [];
//   const shift = toIndex - fromIndex > 0 ? 1 : -1;
//   const start = toIndex < fromIndex ? toIndex : fromIndex;
//   const end = start < toIndex ? toIndex : fromIndex;

//   for (let index = 0; index < collection.length; index++) {
//     var offset = index >= start && index <= end ? shift : 0;
//     result[index] = collection[index + offset];
//   }

//   result[toIndex] = collection[fromIndex];
//   tempData = result;
//   return result;
// }

// handleSortEnd = ({ oldIndex, newIndex }) => {
//   this.setState(({ items }) => ({
//     items: this.move(
//       items?.length === tempData?.length ? items : tempData,
//       oldIndex,
//       newIndex
//     ),
//   }));
// };

// render() {
//   return (
// <React.Fragment>
//   <SortableList
//     items={this.state.items}
//     lockAxis="y"
//     onSortEnd={this.handleSortEnd}
//   />
// </React.Fragment>
//   );
// }
// }
